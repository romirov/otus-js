const openweathermapApiToken = "2710a5b346d4ef8dad25aeb833b592ff";
const numberOfStoredCities = 10;

/**
 * Получаем погоду по наименованию города
 */
async function getWeatherByCityName(cityName) {
  // eslint-disable-next-line max-len
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openweathermapApiToken}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  // eslint-disable-next-line no-console
  return data;
}

/**
 * Получаем погоду по координатам местности
 */
async function getWeatherByCoordinate(latitude, longitude) {
  // eslint-disable-next-line max-len
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openweathermapApiToken}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

/**
 * Содержит логику работы по выводу погоды
 */
function drawWeather(el, data) {
  // eslint-disable-next-line max-len
  const title = document.createElement("h2");
  title.innerText = `Mестоположение: ${data.name}`;
  title.className = `${el.className}-${title.tagName}`;

  const temp = document.createElement("p");
  temp.innerText = `Температура: ${data.main.temp}°C`;
  temp.className = `${el.className}-${temp.tagName}`;

  const img = document.createElement("img");
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  img.className = `${el.className}-${img.tagName}`;

  el.append(title);
  el.append(temp);
  el.append(img);
}

/**
 * Сохраняет города в истории
 */
function saveNewCityToLocalStorage(cityName) {
  // eslint-disable-next-line max-len
  const cities = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : [];
  if (cities.length >= numberOfStoredCities) {
    if (!cities.includes(cityName)) {
      cities.unshift(cityName); // добавляем элемент в начало
      cities.pop(); // удаляем элемент с конца
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (!cities.includes(cityName)) {
      cities.unshift(cityName); // добавляем элемент в начало
    }
  }
  localStorage.removeItem("cities");
  localStorage.setItem("cities", JSON.stringify(cities));
  // eslint-disable-next-line no-console
  console.log(localStorage);
}

/**
 * Содержит логику работы по выводу погоды в текущем местоположении пользователя
 */
function drawWeatherToCurrentLocation() {
  // погода (город, температура и иконка) в своей местности
  // eslint-disable-next-line no-new-object
  if ("geolocation" in navigator) {
    // eslint-disable-next-line no-console
    console.log("местоположение доступно");
    const currentLocation = {};
    // получаем координаты текущего местоположения
    navigator.geolocation.getCurrentPosition((position) => {
      currentLocation.latitude = position.coords.latitude;
      currentLocation.longitude = position.coords.longitude;
      // eslint-disable-next-line no-console
      console.log(`
          Широта: ${currentLocation.latitude}, 
          Долгота: ${currentLocation.longitude}
        `);
      // получаем погоду по координатам текущего местоположения
      getWeatherByCoordinate(
        currentLocation.latitude,
        currentLocation.longitude,
      ).then((currentLocationWeather) => {
        // выводим погоду
        // eslint-disable-next-line max-len
        drawWeather(
          document.querySelector(".currentLocationWeather"),
          currentLocationWeather,
        );
      });
    });
  } else {
    // eslint-disable-next-line no-console
    console.log("местоположение НЕ доступно");
  }
}

/**
 * Обрабатывает ввод пользователя
 */
function cityHandler() {
  const cityName = document.querySelector(".input").value;

  // удаление погоды
  const div = document.querySelector(".inputCityWeather");
  if (div.length !== 0) {
    const title = document.querySelector(`.${div.className}-H2`);
    const temp = document.querySelector(`.${div.className}-P`);
    const img = document.querySelector(`.${div.className}-IMG`);
    if (title !== null) {
      title.remove();
      temp.remove();
      img.remove();
    }
  }

  saveNewCityToLocalStorage(cityName);

  // добавление погоды
  getWeatherByCityName(cityName).then((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    // сохранение города в истории
    saveNewCityToLocalStorage(cityName);
    // вывод погоды
    drawWeather(div, data);
  });
}

/**
 * Содержит логику работы по выводу погоды по запрошенному городу
 */
function drawWeatherByInputField() {
  const div = document.querySelector(".inputField");
  const inputField = document.createElement("input");
  inputField.defaultValue = "enter your city";
  inputField.className = "input";

  const button = document.createElement("button");
  button.innerText = "Submit";

  button.addEventListener("click", cityHandler);

  div.append(inputField);
  div.append(button);
}

/**
 * Обрабатывает ввод пользователя
 */
function cityHandlerLink(el) {
  const cityName = el.value;
  const weather = getWeatherByCityName(cityName);
  // eslint-disable-next-line no-console
  console.log(weather);
  drawWeather(document.querySelector(".inputCitiesWeather"), weather);
}

/**
 * Содержит логику работы по выводу городов из истории
 */
function drawCitiesFromLocalStorage() {
  // получение городов из истории
  const cities = localStorage.Object.keys(localStorage);
  const div = document.querySelector(".inputCitiesWeather");
  cities.array.forEach((element) => {
    const a = document.createElement("a");
    a.className = element;
    // eslint-disable-next-line max-len
    a.addEventListener(
      "click",
      cityHandlerLink(document.querySelector(`.${element}`)),
    );
    div.append(a);
  });
}

/**
 * Содержит логику работы:
 * - по получению погоды по координатам пользователя
 * - поле ввода города, для которого надо узнать погоду
 * - вывод городов, для которых ранее надо было узнать погоду
 */
function drawDataViaCreateElement() {
  drawWeatherToCurrentLocation();

  drawWeatherByInputField();

  drawCitiesFromLocalStorage();
}

drawDataViaCreateElement();

const openweathermapApiToken = "2710a5b346d4ef8dad25aeb833b592ff";
const numberOfStoredCities = 10;

/**
 * Получаем погоду по наименованию города
 */
async function getWeatherByCityName(cityName) {
  // eslint-disable-next-line max-len
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openweathermapApiToken}`;
  const response = await fetch(url);
  const data = await response.json();
  // eslint-disable-next-line no-console
  console.log(data);
  return data;
}

/**
 * Получаем погоду по координатам местности
 */
async function getWeatherByCoordinate(latitude, longitude) {
  // eslint-disable-next-line max-len
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openweathermapApiToken}`;
  const response = await fetch(url);
  const data = await response.json();
  // eslint-disable-next-line no-console
  console.log(data);
  return data;
}

/**
 * Получаем текущие координаты пользователя
 */
// eslint-disable-next-line consistent-return
function geoCurrentLocation() {
  // eslint-disable-next-line no-new-object
  const result = new Object();
  result.latitude = Number.MAX_SAFE_INTEGER;
  result.longitude = Number.MAX_SAFE_INTEGER;
  if ("geolocation" in navigator) {
    // eslint-disable-next-line no-console
    console.log("местоположение доступно");
    navigator.geolocation.getCurrentPosition((position) => {
      result.latitude = position.coords.latitude;
      result.longitude = position.coords.longitude;
      // eslint-disable-next-line no-console, max-len
      console.log(`Широта: ${result.latitude}, Долгота: ${result.longitude}`);
      return result;
    });
  } else {
    // eslint-disable-next-line no-console
    console.log("Местоположение НЕ доступно");
    return result;
  }
}

/**
 * Содержит логику работы по выводу погоды
 */
function drawWeather(data) {
  const div = document.createElement("div");

  const title = document.createElement("h2");
  title.innerText = data.name;

  const temp = document.createElement("p");
  temp.innerText = data.main.temp;

  const img = document.createElement("img");
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  div.append(title);
  div.append(temp);
  div.append(img);
}

/**
 * Сохраняет города в истории
 */
function saveNewCityToLocalStorage(cityName, json) {
  if (localStorage.length >= numberOfStoredCities - 1) {
    const key = localStorage.key(0);
    localStorage.removeItem(key);
    localStorage.setItem(cityName, json);
  } else {
    localStorage.setItem(cityName, json);
  }
}

/**
 * Обрабатывает ввод пользователя
 */
function cityHandler() {
  const cityName = document.getElementById("input").value;
  const data = getWeatherByCityName(cityName);
  // eslint-disable-next-line no-console
  console.log(data);
  // сохранение города в истории
  saveNewCityToLocalStorage(cityName, JSON.stringify(data));
  // вывод погоды
  drawWeather(data);
}

/**
 * Содержит логику работы по выводу погоды в текущем местоположении пользователя
 */
function drawWeatherToCurrentLocation() {
  // погода (город, температура и иконка) в своей местности
  const currentLocation = geoCurrentLocation();
  // получение погоды по координатам
  // eslint-disable-next-line max-len
  const currentLocationWeather = getWeatherByCoordinate(
    currentLocation.latitude,
    currentLocation.longitude,
  );
  // вывод погоды
  drawWeather(currentLocationWeather);
}

/**
 * Содержит логику работы по выводу погоды по запрошенному городу
 */
function drawWeatherByInputField() {
  const div = document.createElement("div");
  const inputField = document.createElement("input");
  inputField.innerText = "enter your city";

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
  drawWeather(weather);
}

/**
 * Получает города из истории
 */
function drawCitiesFromLocalStorage() {
  const cities = localStorage.Object.keys(localStorage);
  const div = document.createElement("div");
  div.className = "CitiesList";
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
// {
//     "coord": {
//         "lon": -0.1257,
//         "lat": 51.5085
//     },
//     "weather": [
//         {
//             "id": 803,
//             "main": "Clouds",
//             "description": "broken clouds",
//             "icon": "04n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 285.14,
//         "feels_like": 284.51,
//         "temp_min": 283.92,
//         "temp_max": 286.36,
//         "pressure": 999,
//         "humidity": 81
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 7.72,
//         "deg": 240,
//         "gust": 12.86
//     },
//     "clouds": {
//         "all": 75
//     },
//     "dt": 1699910127,
//     "sys": {
//         "type": 2,
//         "id": 2075535,
//         "country": "GB",
//         "sunrise": 1699859666,
//         "sunset": 1699892111
//     },
//     "timezone": 0,
//     "id": 2643743,
//     "name": "London",
//     "cod": 200
// }

drawDataViaCreateElement();

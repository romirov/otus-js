function workWithDom() {
  const inputElement = document.querySelector('.input');
  const btn = document.querySelector('.button');
  const messageBox = document.querySelector('.messageBox');
  let message = '';

  if (inputElement.innerText === '') {
    btn.hidden = true;
  }

  inputElement.addEventListener('input', (inputElementValue) => {
    btn.hidden = false;
    message = inputElementValue.target.value;
  });

  btn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = message;
    messageBox.append(newParagraph);
    btn.hidden = true;
  });
}

workWithDom();

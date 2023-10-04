function workWithDom(){
    let inputElement = document.querySelector('.input');
    let btn = document.querySelector('.button');
    let messageBox = document.querySelector('.messageBox');
    let message = "";

    if(inputElement.innerText === '') {
        btn.hidden = true;
    } 
    
    inputElement.addEventListener("input", function(inputElementValue) {
        btn.hidden = false;
        message = inputElementValue.target.value;
    });

    btn.addEventListener("click", function () {
        let newParagraph = document.createElement('p');
        newParagraph.innerText = message;
        messageBox.append(newParagraph);
        btn.hidden = true;
    });
}

workWithDom()
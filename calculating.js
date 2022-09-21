/* const display = document.querySelector('#result')

let buttons = document.querySelectorAll('.button')
for (let button of buttons)
button.addEventListener("click", (event) => {
    console.log(event.target.innerText)
    let newElement = document.createElement('div')
    let text = document.createTextNode(event.target.innerText)
    newElement.appendChild(text)
    display.appendChild(newElement)
 
    //event= what we click -- target= what was clicked
})
*/

const display = document.querySelector('#result')

let buttons = document.querySelectorAll('.button')
for (let button of buttons)
    button.addEventListener("click", (event) => {
        switch (button.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                display.innerText = eval(display.innerText);
        break; 
        default:
        display.innerText += button.innerText;
    }
});




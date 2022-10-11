
let inputBox = document.querySelector('input');
let result = inputBox.addEventListener('input', newText);
let h1 = document.querySelector('h1');

// let newArray = [];
function newText(){
    h1.innerText = inputBox.value;

// let newText = inputBox.value;
// newArray.push(newText);
// console.log(newArray);
}


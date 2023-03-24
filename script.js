let input = document.getElementById("inputbox");
let buttuns = document.querySelectorAll('.keybutton');

// let string = ['']

// string = buttuns;

// document.addEventListener('click', function valuebuttun(e){





// })



function valuebuttun(e){

input.value += e.value;
}

function Acbuttun(){
    input.value = null;
}


function calculate(){
    input.value =  eval(input.value)
}


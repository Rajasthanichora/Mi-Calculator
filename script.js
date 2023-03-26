let input = document.getElementById("inputbox");
// ! Keypad
let buttuns = document.querySelectorAll(".keybutton");
let input2 = document.getElementById("inputbox2u");

function valuebuttun(e) {
  buttonText = e.value;
  // ! oprator buttun start
  if (buttonText == "÷") {
    buttonText = "/";
    input.value += buttonText;
    input.value = input.value;
  } else if (buttonText == "×") {
    buttonText = "*";
    input.value += buttonText;
    input.value = input.value;
    // ! oprator buttun end
    // ! equal buttun
  } else if (buttonText == "=") {
    document
      .getElementById("inputbox2u")
      .setAttribute(
        "style",
        "font-size: 55px;  height: 40px; margin-bottom: 10px; transition: 0.4s; "
      );
    document
      .getElementById("inputbox")
      .setAttribute("style", "font-size: 28px;  height: 35px;");

    // !ac buttun
  } else if (buttonText == "AC") {
    input.value = null;
    document
      .getElementById("inputbox2u")
      .setAttribute("style", "color: white;");
    document
      .getElementById("inputbox")
      .setAttribute("style", "font-size: 55px;  height: 40px;");
  } else if ((input.value += buttonText)) {
    document
      .getElementById("inputbox2u")
      .setAttribute("style", "color: black;");
  } else {
    input.value += buttonText;
    input.value = input.value;
  }
  input2.value = eval(input.value);
  input2.value += "=";

  // ! Text overflow start
  // ? input 1 start
  if (input.value.length == 10) {
    document.getElementById("inputbox").style.fontSize = "40px";
    document.getElementById("inputbox").style.height = "30px";
  } else if (input.value.length == 14) {
    document.getElementById("inputbox").style.fontSize = "30px";
    document.getElementById("inputbox").style.height = "22px";
  } else if (input.value.length == 18) {
    document.getElementById("inputbox").style.textOverflow = "ellipsis";
  }
  // ? input 1 end
  // ? input 2 start
  if (input2.value.length == 20) {
    document.getElementById("inputbox2u").style.fontSize = "21px";
  } else if (input2.value.length == 21) {
    document.getElementById("inputbox2u").style.fontSize = "21px";
  } else if (input2.value.length == 22) {
    document.getElementById("inputbox2u").style.fontSize = "21px";
  }
  // ? input 2 end
  // ! Text overflow end
}

// ! page reload start
if (input2.value == "undefined=") {
  document.getElementById("inputbox2u").style.color = "white";
}
// ! page reload end

// ! backspace buttun start
function backspace() {
  input.value = input.value.slice(0, -1);
  input2.value = input2.value.slice(0, -1);
}
// ! backspace buttun end

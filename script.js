let input = document.getElementById("inputbox");
// ! Keypad
let buttuns = document.querySelectorAll(".keybutton");
let input2 = document.getElementById("inputbox2u");

function valuebuttun(e) {
  buttonText = e.value;

  if (buttonText == "÷") {
    buttonText = "/";
    input.value += buttonText;
    input.value = input.value;
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
}

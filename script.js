let input = document.getElementById("inputbox");
// ! Keypad
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ! Dark mode start
function Darkmode() {
  /////////////////////////////////////////////////
  // ? numbers digits 1----9 start
  var whiteclrbtn = document.querySelectorAll(".modebtn");
  for (let i = 0; i < whiteclrbtn.length; i++) {
    whiteclrbtn[i].style.color = "white";
  }
  // ? numbers digits 1----9 end
  /////////////////////////////////////////////////
  // !input color start
  var blackclrbtn = document.querySelectorAll("input");
  for (let i = 0; i < blackclrbtn.length; i++) {
    blackclrbtn[i].style.backgroundColor = "black";
  }
  // * equal === buttun start
  var darkinputs = document.getElementById("equalbtn");
  darkinputs.addEventListener("click", clickdark);
  function clickdark() {
    document
      .getElementById("inputbox2u")
      .setAttribute(
        "style",
        "font-size: 55px;  height: 40px; margin-bottom: 10px; transition: 0.4s; "
      );
    document
      .getElementById("inputbox")
      .setAttribute("style", "font-size: 28px;  height: 35px;");
    document.getElementById("inputbox").style.backgroundColor = "black";
    document.getElementById("inputbox2u").style.backgroundColor = "black";
    document.getElementById("inputbox2u").style.color = "white";
    document.getElementById("inputbox").style.color = "white";
    if (input2.value == "undefined=") {
      document.getElementById("inputbox2u").style.color = "black";
    }
  }
  // * equal === buttun end
  // * all keysssss buttun start
  var allkeysdarkinput = document.querySelectorAll(".keybutton");
  for (let i = 0; i < allkeysdarkinput.length; i++) {
    allkeysdarkinput[i].addEventListener("click", allkeysclickdrk);
    function allkeysclickdrk() {
      document.getElementById("inputbox").style.backgroundColor = "black";
      document.getElementById("inputbox2u").style.backgroundColor = "black";
      document.getElementById("inputbox2u").style.color = "white";
      document.getElementById("inputbox").style.color = "white";
      if (input2.value == "undefined=") {
        document.getElementById("inputbox2u").style.color = "black";
      }
    }
  }
  // * all keysssss buttun end
  // * AC buttun start
  var acbtndarkinputs = document.getElementById("Acbuttun");
  acbtndarkinputs.addEventListener("click", acclickdark);
  function acclickdark() {
    document.getElementById("inputbox").style.backgroundColor = "black";
    document.getElementById("inputbox2u").style.backgroundColor = "black";
    document.getElementById("inputbox2u").style.color = "black";
    document.getElementById("inputbox").style.color = "black";
    if (input2.value == "undefined=") {
      document.getElementById("inputbox2u").style.color = "black";
    }
  }
  // * Ac buttun end
  // !input color end
  /////////////////////////////////////////////////
  //  ? convert section start
  document.getElementById("convertsection").style.backgroundColor = "black";
  document.getElementById("convertsection").style.border = "none";
  //  ? convert section end
  /////////////////////////////////////////////////
  //  ? backspace buttun start
  document.getElementById("modebacksace").style.backgroundColor = "black";
  //  ? backspace buttun end
  /////////////////////////////////////////////////
  // * switch butttun dark && white
  //  ? white mode buttun start
  document.getElementById("lightbtnn").style.display = "contents";
  //  ? white mode buttun end
  /////////////////////////////////////////////////
  //  ? dark mode buttun start
  document.getElementById("darkbtnn").style.display = "none";
  //  ? dark mode buttun end
  /////////////////////////////////////////////////
  //  ? dark mode --&&- white mode buttun start
  document.getElementById("darkmodebtn").style.backgroundColor = "black";
  //  ? dark mode --&&- white mode buttun end
  // * switch butttun dark && white
  /////////////////////////////////////////////////
  //  ? equal buttun start
  document.getElementById("equalbtn").style.backgroundColor = "#ca5d0e";
  //  ? equal buttun end
  /////////////////////////////////////////////////
  // ? hover background effect start
  var allkeys = document.querySelectorAll(".keybutton");
  for (let i = 0; i < allkeys.length; i++) {
    allkeys[i].addEventListener("mouseover", mouseOver);
    allkeys[i].addEventListener("mouseout", mouseOut);
    function mouseOver() {
      allkeys[i].style.backgroundColor = "#222";
    }
    function mouseOut() {
      allkeys[i].style.backgroundColor = "black";
    }
  }
  // ? hover background effect end
  /////////////////////////////////////////////////
  if (input2.value == "undefined=") {
    document.getElementById("inputbox2u").style.color = "black";
  }
}
// ! Dark mode end


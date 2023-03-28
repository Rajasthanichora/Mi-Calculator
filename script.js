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
    if (input2.value.length == 10) {
      document.getElementById("inputbox2u").style.fontSize = "40px";
    } else if (input2.value.length == 11) {
      document.getElementById("inputbox2u").style.fontSize = "38px";
    } else if (input2.value.length == 12) {
      document.getElementById("inputbox2u").style.fontSize = "36px";
    } else if (input2.value.length == 13) {
      document.getElementById("inputbox2u").style.fontSize = "34px";
    } else if (input2.value.length == 14) {
      document.getElementById("inputbox2u").style.fontSize = "32px";
    } else if (input2.value.length == 15) {
      document.getElementById("inputbox2u").style.fontSize = "30px";
    } else if (input2.value.length == 16) {
      document.getElementById("inputbox2u").style.fontSize = "28px";
    } else if (input2.value.length == 17) {
      document.getElementById("inputbox2u").style.fontSize = "27px";
    } else if (input2.value.length == 18) {
      document.getElementById("inputbox2u").style.fontSize = "26px";
    } else if (input2.value.length == 19) {
      document.getElementById("inputbox2u").style.fontSize = "25px";
    } else if (input2.value.length == 20) {
      document.getElementById("inputbox2u").style.fontSize = "24px";
    }
    document.getElementById("inputbox2u").style.marginBottom = "6px";
    if (input2.value == "undefined=") {
      document.getElementById("inputbox2u").style.color = "white";
      document.getElementById("inputbox2u").style.marginBottom = "6px";
    }
    // ! MY SIGNATURE START
    if (input.value == "%6350%") {
      alert("MADE BY『』𝑅𝒜𝒥𝒜𝒮𝒯𝐻𝒜𝒩𝐼 𝒞𝐻𝒪𝑅𝒜");
      document.getElementById("inputbox2u").value =
        "MADE BY『』𝑅𝒜𝒥𝒜𝒮𝒯𝐻𝒜𝒩𝐼 𝒞𝐻𝒪𝑅𝒜";
      document.getElementById("inputbox").value = "🎀  𝒲𝐸𝐿𝒞♡𝑀𝐸  🎀";
      document.getElementById("inputbox2u").style.fontSize = "15px";
      document.getElementById("inputbox2u").style.color = "black";
    }
    // ! MY SIGNATURE START
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
      .setAttribute("style", "color: #7b7b7b;");
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

function Darklightmode() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    var eqauall = document.getElementById("equalbtn");
    eqauall.addEventListener("click", function () {
      document.getElementById("inputbox2u").style.color = "white";
    });
    document.getElementById("lightbtnn").style.display = "contents";
    document.getElementById("darkbtnn").style.display = "none";
    var alldugits = document.querySelectorAll(".modebtn");
    for (let i = 0; i < alldugits.length; i++) {
      document.addEventListener("click", clikingdigit);
      function clikingdigit() {
        if (input2.value == "undefined=") {
          document.getElementById("inputbox2u").style.color = "black";
        }
      }
    }
  } else {
    document.getElementById("darkbtnn").style.display = "contents";
    document.getElementById("lightbtnn").style.display = "none";
  }
}

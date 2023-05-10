var show = "";
var first = "";
var second = "";
var sign = "";
var clear = "";
function cal(x) {
  if (sign == "") {
    first += x;
    show += x;
    document.getElementById("result").innerText = show;
    // console.log(first);
  } else {
    second += x;
    show += x;
    document.getElementById("result").innerText = show;
    // console.log(second);
  }
}
function sum(x) {
  sign = x;
  show += x;
  document.getElementById("result").innerText = show;
  // console.log(sign);
}
function result() {
  if (sign == "+") {
    document.getElementById("result").innerText =
      parseInt(first) + parseInt(second);
  } else if (sign == "-") {
    document.getElementById("result").innerText =
      parseInt(first) - parseInt(second);
  } else if (sign == "/") {
    document.getElementById("result").innerText =
      parseInt(first) / parseInt(second);
  } else {
    document.getElementById("result").innerText =
      parseInt(first) * parseInt(second);
  }

  first = "";
  second = "";
  sign = "";
  show = "";
}

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("result").innerText = "";
});

const icon = document.getElementById("icon");

const sunicon = document.getElementById("sun-icon");
const moonicon = document.getElementById("moon-icon");

icon.addEventListener("click", () => {
  if (sunicon.style.display != "none") {
    document.querySelector("body").style.backgroundColor = "#000";
    moonicon.style.display = "flex";
    sunicon.style.display = "none";

    var elements = document.getElementsByClassName("sm");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#4d4c4c";

      elements[i].style.color = "#fff";
    }

    document.getElementById("result").style.backgroundColor = "#4d4c4c";
    document.getElementById("result").style.color = "#fff";
  } else {
    sunicon.style.display = "flex";
    moonicon.style.display = "none";
    document.querySelector("body").style.backgroundColor = "#00ffe1";
    var elements = document.getElementsByClassName("sm");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#fff";
      elements[i].style.color = "#6b6b6b";
    }
    document.getElementById("result").style.backgroundColor = "#fff";
    document.getElementById("result").style.color = "#6b6b6b";
  }
});

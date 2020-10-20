window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  var celsIn = document.getElementById("cInput");
  var fahrIn = document.getElementById("fInput");
  var button = document.getElementById("convertButton");
  var errMsg = document.getElementById("errorMessage");

  button.addEventListener("click", convertButtonClicked);

  var clearTextbox = function (other) {
    other.value = "";
  };

  celsIn.addEventListener("input", function () {
    clearTextbox(fahrIn);
  });

  fahrIn.addEventListener("input", function () {
    clearTextbox(celsIn);
  });
  // TODO: Complete the function
}

function convertButtonClicked() {
  var cIn = document.getElementById("cInput");
  var fIn = document.getElementById("fInput");
  var errMsg = document.getElementById("errorMessage");
  var weatherImg = document.getElementById("weatherImage");

  if (cIn.value.length > 0) {
    var celsius = parseFloat(cIn.value);
    if (!isNaN(celsius)) {
      fIn.value = convertCtoF(celsius);
      if (fIn.value < 32) {
        weatherImg.setAttribute("alt", "Cold");
        weatherImg.setAttribute("src", "cold.gif");
      } else if (fIn.value >= 32 && fIn.value < 50) {
        weatherImg.setAttribute("alt", "Cool");
        weatherImg.setAttribute("src", "cool.gif");
      } else {
        weatherImg.setAttribute("alt", "Warm");
        weatherImg.setAttribute("src", "warm.gif");
      }
      errMsg.innerHTML = "";
    } else {
      errMsg.innerHTML = cIn.value + " is not a number";
    }
  } else if (fIn.value.length > 0) {
    var fahrenheit = parseFloat(fIn.value);
    if (!isNaN(fahrenheit)) {
      cIn.value = convertFtoC(fahrenheit);
      if (fIn.value < 32) {
        weatherImg.setAttribute("alt", "Cold");
        weatherImg.setAttribute("src", "cold.gif");
      } else if (fIn.value >= 32 && fIn.value < 50) {
        weatherImg.setAttribute("alt", "Cool");
        weatherImg.setAttribute("src", "cool.gif");
      } else {
        weatherImg.setAttribute("alt", "Warm");
        weatherImg.setAttribute("src", "warm.gif");
      }
      errMsg.innerHTML = "";
    } else {
      errMsg.innerHTML = fIn.value + " is not a number";
    }
  }
}

function convertCtoF(degreesCelsius) {
  return (degreesCelsius * 9) / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
  return ((degreesFahrenheit - 32) * 5) / 9;
}

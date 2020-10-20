window.addEventListener("DOMContentLoaded", domLoaded);
var convertButton = document.getElementById("convertButton");
var cInput = document.getElementById("cInput");
var fInput = document.getElementById("fInput");
var warmImage = document.getElementById("warm");
var coolImage = document.getElementById("cool");
var coldImage = document.getElementById("cold");
var errorMessage = document.getElementById("errorMessage");

cInput.addEventListener("input", () => {
  if (fInput.value.length > 0) {
    fInput.value = "";
  }
});
fInput.addEventListener("input", () => {
  if (cInput.value.length > 0) {
    cInput.value = "";
  }
});

function convertToF(c) {
  return c * (9 / 5) + 32;
}
function convertToC(f) {
  return ((f - 32) * 5) / 9;
}

function showImage(f) {
  if (f < 32) {
    coldImage.style.display = "block";
  } else if (f >= 32 && f <= 50) {
    coolImage.style.display = "block";
  } else {
    warmImage.style.display = "block";
  }
}

function domLoaded() {
  if (isNaN(cInput)) {
    errorMessage.innerHTML = cInput + " is not a number";
  } else {
    cInput.value = convertToC(parseFloat(fInput.value));
    showImage(fInput.value);
  }
  if (isNaN(fInput)) {
    errorMessage.innerHTML = fInput + " is not a number";
  } else {
    fInput.value = convertToF(parseFloat(cInput.value));
    showImage(fInput.value);
  }
}

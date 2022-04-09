const button = document.getElementById("button")

const alertt = function () {
  alert("クリックしたね")
}

button.onclick = alertt

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const LogValue = function (e) {
  console.log("e.target.value")
}

inputText.oninput = LogValue
inputDate.oninput = LogValue

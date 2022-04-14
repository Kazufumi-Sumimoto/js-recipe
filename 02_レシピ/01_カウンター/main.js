const display = document.getElementById("display")
const plusButoon = document.getElementById("plus-button")

let count = 0

plusbutton.onclick = function () {
  count += 1

  display.textContent = count
}

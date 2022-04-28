const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const Button = document.getElementsByClassName("button")[0]

let count = 0

plusButton.onclick = function () {
  count += 1

  display.textContent = count
}

const card = document.createElement("button")
card.className = "card"
card.textContent = "×2"
Button.append(card)

card.onclick = function () {
  count *= 2
  display.textContent = count
}

const decreaseCount = document.createElement("button")
decreaseCount.className = "decrease"
decreaseCount.textContent = "-1"
Button.append(decreaseCount)

decreaseCount.onclick = function () {
  count -= 1
  display.textContent = count
}

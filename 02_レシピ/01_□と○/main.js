const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")

let num = 1
figure.onclick = function () {
  if (num == 0) {
    figure.classList.add("square")
    figure.classList.remove("triangle")
    num += 1
  } else if (num == 1) {
    figure.classList.add("rounded")
    num += 1
  } else if (num == 2) {
    figure.classList.remove("rounded")
    figure.classList.remove("square")
    figure.classList.add("triangle")
    num = 0
  }
}

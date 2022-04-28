const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  const memo = createMemo(memoInput.value)
  memoContainer.append(memo)
  console.log(memoInput.value)
  memoInput.value = ""
}

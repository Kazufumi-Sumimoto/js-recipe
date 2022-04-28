const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
const removeButton = document.getElementByclassName("remove")

addButton.onclick = function () {
  console.log(memoInput.value) //textContentはHTML内のwebページに表示される文字
  const memo = document.createElement("div")//div要素を作成
  const remove = document.createElement("button")//削除ボタンの作成

  //memo-inputのメモの内容をさっき作ったdiv要素に代入
  memo.textContent = memoInput.value
  //
  memoContainer.append(memo)
  remove.textContent = "削除"
  remove.className
  memoContainer.append(remove)
  remove.classList.add = "remove"

  memoInput.value = ""
}
/

removeButton.onclick = function () {
  memo.remove()
}

const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const Button = document.getElementsByClassName("button-main")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

//ボタンの追加

const button1 = document.createElement("button")
button1.setAttribute("id", "choice-1")

const button2 = document.createElement("button")
button2.setAttribute("id", "choice-2")

const button3 = document.createElement("button")
button3.setAttribute("id", "choice-3")

const button4 = document.createElement("button")
button4.setAttribute("id", "choice-4")

button1.append(Button)
button2.append(Button)
button3.append(Button)
button4.append(Button)

// クイズの内容
const quiz = {
  text: "このキャラクターの名前はなんでしょう？",
  image: "swallows.jpg",
  choices: [
    {
      text: "きららん",
      feedback: "残念！きららんは、燕市のマスコットキャラクターだよ",
    },
    {
      text: "つばみ",
      feedback:
        "残念！つばみは、ヤクルトスワローズの女の子のキャラクターだよ。",
    },
    {
      text: "つば九郎",
      feedback: "正解！つば九郎は、ヤクルトスワローズの公式キャラクターだよ！",
    },
    {
      text: "つば八郎",
      feedback: "惜しい!つば八郎だと数字が足りない、、",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}
choice4.onclick = function () {
  choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()

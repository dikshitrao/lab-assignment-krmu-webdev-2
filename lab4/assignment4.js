const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is the largest mammal on Earth?", answer: "blue whale" },
    { question: "Who wrote the national anthem of India?", answer: "rabindranath tagore" },
    { question: "What is the square root of 64?", answer: "8" }
];

function runQuiz() {

    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {

        let userInput = prompt(quizQuestions[i].question);

        if (userInput === null) {
            alert("Quiz cancelled.");
            return;
        }

        userInput = userInput.toLowerCase().trim();

        if (userInput === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    alert(
        "Quiz Completed!\nYour Score: " +
        score +
        " / " +
        quizQuestions.length
    );
}

runQuiz();

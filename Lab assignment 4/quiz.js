let questions = [
    "Captain of Indian Cricket team?",
    "Virat Kohli's last 100?",
    "45+99?",
    "Who is the leading run scorer in ODI cricket?",
    "Who created Marvels?"
]

let answers = [
    "rohit sharma",
    "against south africa",
    "144",
    "virat kohli",
    "stan lee"
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer: " + answers[i]);
    }
}

alert("Final Score: " + score + " / " + questions.length);
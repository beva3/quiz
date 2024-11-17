const questions = [
    {
        type: "multiple-choice",
        question: "What is the size of a pointer in C?",
        options: [
            "4 bytes", 
            "8 bytes", 
            "Dependent on system architecture", 
            "16 bytes"
        ],
        correctAnswer: "Dependent on system architecture"
    },
    {
        type: "fill-in-the-blank",
        question: "In C, the function used to print to the console is ________.",
        correctAnswer: "printf"
    },
    {
        type: "true-false",
        question: "In C, a function can return more than one value.",
        correctAnswer: "False"
    }
];

let currentQuestionIndex = 0;

function displayQuestion(index) {
    const question = questions[index];
    document.getElementById('question').innerText = question.question;
    
    // Show options based on question type
    if (question.type === "multiple-choice") {
        document.getElementById('options').style.display = "block";
        document.getElementById('fill-in-the-blank').style.display = "none";
        document.getElementById('true-false').style.display = "none";
        
        const options = document.getElementsByName('answer');
        options.forEach((option, i) => {
            option.nextElementSibling.innerText = question.options[i];
        });
    }
    
    if (question.type === "fill-in-the-blank") {
        document.getElementById('fill-in-the-blank').style.display = "block";
        document.getElementById('options').style.display = "none";
        document.getElementById('true-false').style.display = "none";
    }
    
    if (question.type === "true-false") {
        document.getElementById('true-false').style.display = "block";
        document.getElementById('options').style.display = "none";
        document.getElementById('fill-in-the-blank').style.display = "none";
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const blankAnswer = document.getElementById('blank-answer').value;
    
    let answer = "";
    if (selectedOption) {
        answer = selectedOption.value;
    } else if (blankAnswer) {
        answer = blankAnswer;
    }
    
    if (answer === questions[currentQuestionIndex].correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        alert('Quiz finished!');
        submitQuiz();
    }
}

function submitQuiz() {
    alert('Quiz submitted!');
}

displayQuestion(currentQuestionIndex);

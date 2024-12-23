function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }
    function showCourses() {
       const catalogue = document.getElementById('courseCatalogue');
       catalogue.classList.toggle('hidden');
   }

function submitQuiz1() {
    // Array of correct answers
    const correctAnswers = ["1", "2", "2", "3", "1", "1", "1", "2", "1", "1"];

    // Retrieve user answers
    const userAnswers = [];
    for (let i = 1; i <= correctAnswers.length; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        userAnswers.push(selectedOption ? selectedOption.value : "0"); // 0 if no answer selected
    }

    // Calculate score
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }

    // Display result
    const resultMessage = `You scored ${score} out of ${correctAnswers.length}.`;
    alert(resultMessage);
}

function submitQuiz2() {
    // Array of correct answers for the quiz
    const correctAnswers = ["a", "a", "b", "b", "b", "c", "a", "b", "a", "a"];

    // Track the number of correct and incorrect answers
    let correctCount = 0;
    let incorrectCount = 0;

    // Loop through each question and check the answer
    for (let i = 1; i <= correctAnswers.length; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        
        // If an answer is selected, check if it is correct
        if (selectedOption) {
            if (selectedOption.value === correctAnswers[i - 1]) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        } else {
            // If no answer is selected, count it as incorrect
            incorrectCount++;
        }
    }

    // Display the result
    const resultMessage = `Correct answers: ${correctCount}\nIncorrect answers: ${incorrectCount}`;
    alert(resultMessage);
}

function submitQuiz3() {
    // Array of correct answers
    const correctAnswers = ["a", "b", "c", "b", "a", "a", "d", "a", "d", "b"];

    // Initialize counters for correct and incorrect answers
    let correctCount = 0;
    let incorrectCount = 0;

    // Loop through each question and check the answer
    for (let i = 1; i <= correctAnswers.length; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        
        // If an answer is selected, check if it is correct
        if (selectedOption) {
            if (selectedOption.value === correctAnswers[i - 1]) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        } else {
            // If no answer is selected, count it as incorrect
            incorrectCount++;
        }
    }

    // Display the result
    const resultMessage = `Correct answers: ${correctCount}\nIncorrect answers: ${incorrectCount}`;
    alert(resultMessage);
}

function submitQuiz4() {
    // Array of correct answers
    const correctAnswers = ["false", "C", "String", "A", "extends", "A", "B", "B", "B", "D"];

    // Initialize counters for correct and incorrect answers
    let correctCount = 0;
    let incorrectCount = 0;

    // Loop through each question and check the answer
    for (let i = 1; i <= correctAnswers.length; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        
        // If an answer is selected, check if it is correct
        if (selectedOption) {
            if (selectedOption.value === correctAnswers[i - 1]) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        } else {
            // If no answer is selected, count it as incorrect
            incorrectCount++;
        }
    }

    // Display the result
    const resultMessage = `Correct answers: ${correctCount}\nIncorrect answers: ${incorrectCount}`;
    alert(resultMessage);
}


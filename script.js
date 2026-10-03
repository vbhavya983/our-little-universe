/* =========================
   ENTER STORY
========================= */

function enterStory() {

    const story = document.getElementById("story");

    story.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   QUIZ QUESTIONS
========================= */

const questions = [

    {
        question: "Who fell first? 👀",
        options: [
            "Him 😌",
            "Her 😂"
        ],
        correct: 0
    },

    {
        question: "Who is always wrong? 😂",
        options: [
            "Him. Obviously. 😭",
            "Her, apparently 🙄"
        ],
        correct: 0
    },

    {
        question: "Who fell harder? 🫶",
        options: [
            "Him ❤️",
            "Her 😌"
        ],
        correct: 0
    },

    {
        question: "Who apologizes first? 🥺",
        options: [
            "Him",
            "Her"
        ],
        correct: 0
    },

    {
        question: "Who gets more jealous? 👀",
        options: [
            "Him 😂",
            "Her 😇"
        ],
        correct: 1
    },

    {
        question: "Who loves the other more? ❤️",
        options: [
            "Him",
            "Her",
            "It's impossible to measure 🥹"
        ],
        correct: 2
    }

];


let currentQuestion = 0;
let score = 0;


/* =========================
   LOAD QUESTION
========================= */

function loadQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question").textContent =
        question.question;

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";

    question.options.forEach(function(option, index) {

        const button =
            document.createElement("button");

        button.textContent = option;

        button.onclick = function() {
            selectAnswer(index);
        };

        answers.appendChild(button);

    });

    document.getElementById("quiz-result").textContent = "";

    document.getElementById("next-question").style.display =
        "none";

    document.getElementById("quiz-progress").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

}


/* =========================
   SELECT ANSWER
========================= */

function selectAnswer(selected) {

    const question = questions[currentQuestion];

    const result =
        document.getElementById("quiz-result");

    const buttons =
        document.querySelectorAll("#answers button");


    buttons.forEach(function(button) {
        button.disabled = true;
    });


    if (selected === question.correct) {

        score++;

        result.textContent =
            "Obviously 😌 You know us too well. ♡";

    } else {

        result.textContent =
            "Wrong answer 😭 You need to study your boyfriend better.";

    }


    document.getElementById("next-question").style.display =
        "inline-block";

}


/* =========================
   NEXT QUESTION
========================= */

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showQuizResult();

    }

}


/* =========================
   FINAL SCORE
========================= */

function showQuizResult() {

    const question =
        document.getElementById("question");

    const answers =
        document.getElementById("answers");

    const result =
        document.getElementById("quiz-result");

    const nextButton =
        document.getElementById("next-question");

    const progress =
        document.getElementById("quiz-progress");


    question.textContent =
        "Okay... let's see your final score 👀";

    answers.innerHTML = "";

    nextButton.style.display =
        "none";

    progress.textContent =
        "QUIZ COMPLETE ♡";


    if (score === questions.length) {

        result.innerHTML =
            `Perfect score: ${score}/${questions.length} 🥹❤️
            <br><br>
            Okay, you REALLY know us.`;

    }

    else if (score >= 4) {

        result.innerHTML =
            `You scored ${score}/${questions.length} 🫶
            <br><br>
            Not bad... you know your girlfriend pretty well. 😌`;

    }

    else {

        result.innerHTML =
            `You scored ${score}/${questions.length} 😭
            <br><br>
            Sir, we need to have a conversation. 😂❤️`;

    }

}


/* =========================
   OPEN WHEN LETTERS
========================= */

function openLetter(type) {

    const letter =
        document.getElementById("letter");


    if (type === "miss") {

        letter.innerHTML = `
            If you're reading this because
            you miss me...

            <br><br>

            just remember that somewhere,
            I'm probably missing you too. ♡
        `;

    }


    else if (type === "sad") {

        letter.innerHTML = `
            You don't have to have everything
            figured out.

            <br><br>

            Take a breath.

            <br><br>

            I'm always on your side. 🌷
        `;

    }


    else if (type === "love") {

        letter.innerHTML = `
            In case I don't say it enough...

            <br><br>

            You are loved.
            You are appreciated.

            <br><br>

            And you mean more to me
            than these little words can explain. ♡
        `;

    }

}


/* =========================
   START QUIZ
========================= */

loadQuestion();
/* =========================
   OUR SOUNDTRACK
========================= */

function toggleMusic() {

    const music =
        document.getElementById("our-song");

    const button =
        document.getElementById("music-button");

    const disc =
        document.querySelector(".music-disc");


    if (music.paused) {

        music.play();

        button.textContent = "Ⅱ";

        disc.style.animationPlayState = "running";

    } else {

        music.pause();

        button.textContent = "▶";

        disc.style.animationPlayState = "paused";

    }

}
/* =========================
   FINAL MESSAGE REVEAL
========================= */

function showFinalMessage() {

    const reveal =
        document.getElementById("final-reveal");

    const button =
        document.querySelector(".final-button");

    reveal.classList.add("show");

    button.classList.add("clicked");

    button.textContent =
        "♡ Always.";

}
/* =========================
   SCROLL REVEAL
========================= */

const sections =
    document.querySelectorAll(".section");
const timelineItems =
    document.querySelectorAll(".timeline-item");


const revealSections = () => {

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {

            section.classList.add("visible");

        }

    });


    timelineItems.forEach(item => {

        const itemTop =
            item.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (itemTop < windowHeight * 0.85) {

            item.classList.add("visible");

        }

    });

};


window.addEventListener(
    "scroll",
    revealSections
);


revealSections();
/* =========================
   SECRET ENTRANCE
========================= */
function unlockUniverse() {

    const password = document.getElementById("password").value;

    if (password === "always") {

        // Hide password screen
        document.getElementById("secret-screen").style.display = "none";

        // Start our song
        const song = document.getElementById("our-song");

        song.volume = 0.7;

        song.play().catch(function(error) {
            console.log("Music could not autoplay:", error);
        });

    } else {

        alert("Hmm... that's not it ♡");

    }
}
/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", function() {

    setTimeout(function() {

        const loadingScreen =
            document.getElementById("loading-screen");

        loadingScreen.classList.add("loaded");

    }, 1200);

});
/* =========================
   SECRET PASSWORD
========================= */

function unlockUniverse() {

    const passwordInput = document.getElementById("password");
    const secretScreen = document.getElementById("secret-screen");
    const song = document.getElementById("our-song");

    const password = passwordInput.value.trim().toLowerCase();

    if (password === "always") {

        // Hide the secret screen
        secretScreen.style.display = "none";

        // Start the song
        song.volume = 0.7;

        song.play().catch(function(error) {
            console.log("Music could not start:", error);
        });

    } else {

        alert("Hmm... that's not it ♡");

        passwordInput.value = "";
        passwordInput.focus();
    }
}
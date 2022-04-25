const questionData = [
	{
	  question:"1. What country do I come from?",
      a:"Poland",
      b:"Thailand",
      c:"Switzerland",
      d:"India",
      correct:"b"
	},
    {
        question:"2.What is my favorite Indian food?",
        a:"Chicken tikka masala",
        b:"Tandoori Butter Chicken",
        c:"Dum chicken biryani",
        d:"All choices are correct",
        correct:"d"
    },
    {
        question:"3. What am I allergic to?",
        a:"Cigarettes",
        b:"Alcohol",
        c:"Clams",
        d:"Shrimps",
        correct:"d"
    },
    {
        question:"4.Who is my best web3 female friend?",
        a:"Vaishali",
        b:"Vanshika",
        c:"Vaneesha",
        d:"Vanishta",
        correct:"b"
    },
    {
        question:"5.What breed is my doggo?",
        a:"Pomeranian",
        b:"Siberian husky",
        c:"Poodle",
        d:"Chihuahua",
        correct:"a"
    },

];

const questionEl=document.getElementById('question');
const answerEls=document.querySelectorAll('.answer');
const container = document.querySelector('.question-container');
const choiceA=document.getElementById('a-text');
const choiceB=document.getElementById('b-text');
const choiceC=document.getElementById('c-text');
const choiceD=document.getElementById('d-text');

const submitBtn=document.getElementById('submit');

let currentQuestion = 0;
let score=0;
loadQuestion();

function loadQuestion(){
    checkChoice();
    const currentQuizData = questionData[currentQuestion];
    questionEl.innerText=currentQuizData.question;
    choiceA.innerText=currentQuizData.a;
    choiceB.innerText=currentQuizData.b;
    choiceC.innerText=currentQuizData.c;
    choiceD.innerText=currentQuizData.d;
}

function checkChoice(){
    answerEls.forEach(answerEl=>answerEl.checked=false);
}

submitBtn.addEventListener('click',()=>{
    //checkin choices
    let answer = getChoiceAnswer();
    if(answer){
        if(answer === questionData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion<questionData.length){
            loadQuestion();
        }else{
            container.innerHTML=`<h2>Thanks for playing! You got the score of ${score}/${questionData.length}</h2>`;
        }
    }
});

function getChoiceAnswer(){
    let answer;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
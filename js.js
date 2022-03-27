// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "En scrum qui valide les user-stories ?",
    answer: "équipe de développement",
    options: [
      "équipe de développement",
      "le scrum master",
      " le product owner",
      
      "toute l’équipe"
    ]
  },
    {
    numb: 2,
    question: "Quelle est la taille de l'équipe de développement",
    answer: "7+-2",
    options: [
      "7+-2 ",
      "plus de 10  ",
     
      "seulement 3",
      "nombre paire "
    ]
  },
    {
    numb: 3,
    question: "Le Backlog de sprint doivent être élaborées et priorisées par " ,
    answer: "le Product Owner",
    options: [
      "le Product Owner",
      "le srcum master ",
      "l'equipe",
      "l'equipe et le client ",
      
      
    ]
  },
    {
    numb: 4,
    question:"Qui est obligatoirement attendu pour le Daily Scrum?",
    answer: " L'équipe de développement",
    options: [
      " L'équipe de développement",
      "Tous ceux qui ont des besoins urgents à exprimer ",
      " Les parties prenantes et l'équipe Scrum au complet",
      "L'équipe Scrum au complet"
    ]
  },
    {
    numb: 5,
    question: "Quel est l'objectif de l'équipe Scrum à la fin de chaque Sprint?",
    answer: "Produire un incrément fonctionnel potentiellement livrable",
    options: [
      "Produire un incrément fonctionnel potentiellement livrable",
      "  Produire un incrément fonctionnel et le mettre en production ",
      "Finir l'ensemble de fonctionnalités même si l'équipe n'a pas eu le temps de tout tester",
    
      
      
    ]
  },
  {
    numb: 6,
    question: "Quelle est la durée de chaque sprint ?",
    answer: "de 2 a 4 semaines",
    options: [
      "de 2 a 4 semaines",
      " 5semaines",
      "2mois ",
      "une semaine "
      
      
    ]
  },
  {
    numb: 7,
    question: "Le Scrum Master est ?",
    answer: "un chef de projet",
    options: [
      "un chef de projet",
      " un membre de l’équipe ",
      " le client  ",
      "un responsable hiérarchique"
      
      
      
    ]
  },
  {
    numb: 8,
    question: "Qu’est-ce qu’un backlog produit ?",
    answer: "La liste des tâches à réaliser pendant le sprint",
    options: [
      "La liste des tâches à réaliser pendant le sprint",
      " La liste des fonctionnalités du projet, estimées et priorisées",
      "Un incrément du produit, potentiellement exploitable" 
     
      
      
    ]
  },
  {
    numb: 9,
    question: "Les méthodes agiles sont ?",
    answer: "methode de travail",
    options: [
      "des diagrammes UML",
     
      "methode de travail",
      "plan de travail",
      "les deux ",

      
      
      
    ]
  },
  {
    numb: 10,
    question: "Le scrum master doit",
    answer: "coacher l’équipe de développement si nécessaire",
    options: [
      "faciliter les cérémonies scrum",
      " voir des connaissances avancées sur la gestion d’un product backlog ",
      "coacher l’équipe de développement si nécessaire      ",
      "developper des taches avec l'equipe   "
     
      
      
    ]
  },
 
 
];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = ()=>{
  info_box.classList.add("activeInfo");
}


exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}


continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(15); 
    startTimerLine(0); 
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb);
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
}


quit_quiz.onclick = ()=>{
    window.location.reload();  /* mise a jour */
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 10){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 10){ // if user scored more than 1
        let scoreTag = '<span> You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index){
    
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}

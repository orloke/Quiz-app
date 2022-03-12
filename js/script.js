const quizData = [
    {
        question: 'Quem ganhou a copa de 2014?',
        a: 'Brasil',
        b: 'Alemanha',
        c: 'Argentina',
        d: 'França',
        correct: 'b'
    },
    {
        question: 'Qual a capital de Goiás?',
        a: 'Brasília',
        b: 'Caldas Novas',
        c: 'Palmas',
        d: 'Goiânia',
        correct: 'd'
    },
    {
        question: 'Qual o resultado da expressão 8*(2+2)/2?',
        a: '14',
        b: '15',
        c: '16',
        d: '8',
        correct: 'c'
    }
]

const questao = document.getElementById('questao')

const answer_a = document.getElementById('answer_a')
const answer_b = document.getElementById('answer_b')
const answer_c = document.getElementById('answer_c')
const answer_d = document.getElementById('answer_d')
const button = document.getElementById('send')
const reload = document.getElementById('reload')
const add = document.getElementById('add')
const question_ask = document.getElementById('question-ask')
const q_a = document.getElementById('question-a') 
const q_b = document.getElementById('question-b') 
const q_c = document.getElementById('question-c') 
const q_d = document.getElementById('question-d')
const q_correct = document.getElementById('question-correct')
const add_question = document.getElementById('add-question') 


let currentQuestion = 0
let score = 0

Deselect()
loadQuiz()
Start()

function loadQuiz(){
    reload.style.display = 'none'
    correntquizData = quizData[currentQuestion]
    questao.innerText = correntquizData.question
    answer_a.innerText = correntquizData.a
    answer_b.innerText = correntquizData.b
    answer_c.innerText = correntquizData.c
    answer_d.innerText = correntquizData.d
}

function Select(){
    const ans = document.querySelectorAll('.point')
    ans.forEach(item=>{
        if(item.checked){
            if(item.value == correntquizData.correct){
                score++
                
            }
        }
    })
}

function Deselect(){
    const ans = document.querySelectorAll('.point')
    ans.forEach(item=>{
        item.checked = false
    })
}

function Start(){
    button.addEventListener('click',()=>{
        console.log(currentQuestion)
        currentQuestion++
        if(currentQuestion<quizData.length){
            Select()
            loadQuiz()
            Deselect()        
        }
    
        if(currentQuestion == quizData.length-1){
            button.innerText = 'Concluir'  
        }
        
        if(currentQuestion == quizData.length){
            Select()
            alert('Você respondeu todas as quetões sua pontuação foi: ' + score)
            button.style.display = 'none'
            reload.style.display = 'block'
        }
    })
}


reload.addEventListener('click',()=>{
    button.style.display = 'block'
    button.innerText = 'Enviar'
    reload.style.display = 'none'
    score = 0
    currentQuestion = 0
    loadQuiz()
    Deselect()
})

add.addEventListener('click',()=>{
    const newQuestion = document.getElementsByClassName('new-question')[0]
    if(newQuestion.getAttribute('style') == "display: none;"){
        newQuestion.style.display = 'flex'
    }else{
        newQuestion.style.display = 'none'
    }    
})

add_question.addEventListener('click',()=>{
    let new_question ={
        question: question_ask.value,
        a: q_a.value,
        b: q_b.value,
        c: q_c.value,
        d: q_d.value,
        correct: q_correct.value
    }

    quizData.push(new_question)
    for (a in new_question){
        console.log(new_question[a])
    }

    question_ask.value = ''
    q_a.value =''
    q_b.value =''
    q_c.value =''
    q_d.value =''
    q_correct.value =''
})
const box = document.getElementById('box')
const question_box = document.getElementById('question_box')
const input_box = document.getElementById('input_box')
const btn_box = document.getElementById('btn_box')
const start = document.getElementById('start')
const wrong = document.getElementById('wrong')
const correct = document.getElementById('correct')
const correct_text = document.getElementById('correct_text')
const win = document.getElementById('win')
const question = document.getElementById('question')
const day = document.getElementById('day')
const day_box = document.getElementById('day_box')
const day_no = document.getElementById('day_no')
const month = document.getElementById('month')
const month_box = document.getElementById('month_box')
const month_no = document.getElementById('month_no')
const answer = document.getElementById('answer')
const answer_box = document.getElementById('answer_box')
const btn = document.getElementById('btn')

let questions = [
    {
        question: `Когда мы впервые обнялись?
(Хоть как и друзья...)`,
        answers: ["4", "декабрь"],
        cnt: 2,
        correct: "В этот самый день мы ещё  впервые вышли с тобой погулять в парке. Я несколько раз намекал тебе, даже прямо говорил, что хочу погулять с тобой, но постоянно не получалось. Как же я был рад, когда ты написала и предложила увидеться в парке. За день до этого я ошибочно подумал, что ты хотела обнять меня. Вот как небольшое недопонимание дало мне толчок наконец обнять тебя..."
    },

    {
        question: "Во время какого урока ты впервые положила голову на моё плечо? (1 слово)",
        answers: ["калкулус"],
        cnt: 1,
        correct: "Мы сидели в библиотеке, ты была уставшей, а я пытался помочь тебе с калкулусом. Помню, что настало молчание, мы просто слушали урок. И я не успел даже заметить, как ты уже положила голову на моё плечо. Осознав всё, я не мог поверить своему счастью... эмоции переполняли меня в тот момент."
    },

    {
        question: "Когда был наш первый раз?",
        answers: ["9", "август"],
        cnt: 2,
        correct: "Что уж тут сказать... Мы оба знали к чему всё идёт. Оба хотели этого, но старались сдерживаться. Наши отношения перешли в новую стадию. Мы любим друг друга, мы заботимся друг о друге и точно также мы безумно хотим друг друга... Это прекрасно."
    },

    {
        question: "Когда мы впервые взялись за руки?",
        answers: ["7", "январь"],
        cnt: 2,
        correct: "Прохладный вечер, твои родители в районе, а мы беззаботно гуляем. Но вот что-то сердце билось так, как перед важнейшим экзаменом... Да, я тогда решился предложить тебе начать встречаться. Хоть мы и не начали встречаться в тот день, я получил твоё согласие. Я стал более уверен в нас - вот и пошёл на ещё один шаг."
    },

    {
        question: "Какой у меня пароль телефона?",
        answers: ["3498"],
        cnt: 1,
        correct: `Наконец-то...
И меня не волнует, что это не в тему!`
    },

    {
        question: "Какой наш первый фильм? (2 слова)",
        answers: ["человек паук"],
        cnt: 1,
        correct: "Всё получилось как-то спонтанно. Вроде бы общались как обычно, но спустя момент уже договорились пойти на фильм вдвоём. Я был рад настолько же, насколько был взволнован... Фильм особо не помню, но вот помню то, как постоянно думал \"Удобно ей?\", \"Она видит моё волнение?\" и, конечно, \"Как же это классно...\"."
    },

    {
        question: "Когда я впервые увидел тебя?",
        answers: ["20", "октябрь"],
        cnt: 2,
        correct: "День прослушивания - тот самый день, когда чувства начали бурлить во мне. Я был влюблён в твой облик, в твой голос и в твою улыбку... Как бы я ни старался, ты не выходила из головы, мысли были забиты тобой. И спустя некоторое время, увидев тебя вновь, я понял, что не в силах бороться с этими чувствами... Таким образом мы и познакомились в этот день."
    }
]

const question_num = questions.length

function checkDay(day){
    if(day==="" || day>=1 && day<=31 && day.charAt(0)!=='0' && day.charAt(0)!==' ' && day.charAt(day.length-1)!==' '){
        day_no.style.display = "none"
    }
    else{
        day_no.style.display = "block"
    }
}

function checkMonth(month){
    const text = month.toLowerCase()
    if(text==="январь" || text==="февраль" ||
        text==="март" || text==="апрель" ||
        text==="май" || text==="июнь" ||
        text==="июль" || text==="август" ||
        text==="сентябрь" || text==="октябрь" ||
        text==="ноябрь" || text==="декабрь" ||
        text===""){
        month_no.style.display = "none"
    }
    else{
        month_no.style.display = "block"
    }
}

window.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && btn_box.style.display === "flex") {
      btn.click()
    }
})

day_box.style.display="none"
month_box.style.display="none"
answer_box.style.display="none"
let max = question_num
let num = 100

let flag1 = true
let flag2 = false // correct
let flag3 = false // win
let flag4 = false // last correct
box.addEventListener('click', () =>{
    if (flag1){
        start.style.display = "none"
        question_box.style.display = "flex"
        input_box.style.display = "block"
        btn_box.style.display = "flex"
        num = Math.floor(Math.random() * max)
        get_quetion(num)
        max--
        flag1 = false
    } else if (flag2){
        question_box.style.display = "flex"
        input_box.style.display = "block"
        btn_box.style.display = "flex"
        correct.style.display = "none"
        flag2 = false
    } else if (flag3){
        question_box.style.display = "flex"
        input_box.style.display = "block"
        btn_box.style.display = "flex"
        win.style.display = "none"
        flag3 = false
    } else if (flag4){
        correct.style.display = "none"
        win.style.display = "block"
        flag4 = false
    }
})

let correct_cnt = 0

btn.addEventListener('click', () =>{
    if (day_no.style.display === "block" && month_no.style.display === "block"){
        alert("Я же сказал, что нет такого числа и месяца!!!")
    } else if (day_box.style.display==="flex" && day.value==='' && month.value===''){
        alert("Введи день и месяц.")
    } else if (day_no.style.display === "block"){
        alert("Я же сказал, что нет такого числа!!!")
    } else if (day_box.style.display==="flex" && day.value===''){
        alert("Введи день.")
    } else if (month_no.style.display === "block"){
        alert("Я же сказал, что нет такого месяца!!!")
    } else if (month_box.style.display==="flex" && month.value===''){
        alert("Введи месяц.")
    } else if (answer_box.style.display==="flex" && answer.value===''){
        alert("Введи ответ.")
    } else{
        check_answer(num)
        day.value = ''
        month.value = ''
        answer.value = ''
        const temp1 = questions.slice(0, num)
        const temp2 = questions.slice(num+1)
        questions = temp1.concat(temp2)
        if (max>0){
            num = Math.floor(Math.random() * max)
            console.log(questions, max, num)
            get_quetion(num)
            max--
        }
    }
})

function get_quetion(num){
    question.innerHTML = `${questions[num].question}`
    if (questions[num].cnt===1){
        day_box.style.display = "none"
        month_box.style.display = "none"
        answer_box.style.display = "flex"
    } else {
        day_box.style.display = "flex"
        month_box.style.display = "flex"
        answer_box.style.display = "none"
    }
}

function check_answer(num){
    if (questions[num].cnt===1){
        if (answer.value.toLowerCase()==questions[num].answers[0]){
            console.log("correct")
            correct_cnt++
            question_box.style.display = "none"
            input_box.style.display = "none"
            btn_box.style.display = "none"
            correct_text.innerText = questions[num].correct
            correct.style.display = "block"
            if (correct_cnt!=question_num){
                setTimeout(() => {
                    flag2 = true
                }, 1000);
            } else{
                setTimeout(() => {
                    flag4 = true
                }, 1000);
            }
        } else {
            console.log("wrong")
            get_wrong()
        }
    } else {
        if (day.value==questions[num].answers[0] &&
                month.value.toLowerCase()==questions[num].answers[1]){
            console.log("correct")
            correct_cnt++
            question_box.style.display = "none"
            input_box.style.display = "none"
            btn_box.style.display = "none"
            correct.style.display = "block"
            correct_text.innerText = questions[num].correct
            if (correct_cnt!=question_num){
                setTimeout(() => {
                    flag2 = true
                }, 1000);
            } else{
                setTimeout(() => {
                    flag4 = true
                }, 1000);
            }
        } else {
            console.log("wrong")
            get_wrong()
        }
    }
}

function get_win(){
    question_box.style.display = "none"
    input_box.style.display = "none"
    btn_box.style.display = "none"
    win.style.display = "block"
}

function get_wrong(){
    question_box.style.display = "none"
    input_box.style.display = "none"
    btn_box.style.display = "none"
    wrong.style.display = "block"
    setTimeout(() => {
        location.reload() 
    }, 3000);
}

const play = document.querySelector("#play");
const refresh = document.querySelector("#refresh");
const save = document.querySelector("#save");
const timer = document.querySelector("#timer");
const placyMark = document.querySelector(".placy-Mark");
const hEl = document.querySelector("#h");
const mEl = document.querySelector("#m");
const sEl = document.querySelector("#s");
const milsEl = document.querySelector("#mls");
const numbers = document.querySelector("#number");

let tempo = 0;
let intervalo;
let rodando = false;

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliSeconds = 0;


//Função para iniciar o cronometro
const startTimer = () => {
    intervalo = setInterval(() => {
        if(!rodando){
            // rodando = true;
            miliSeconds += 10;

            if(miliSeconds === 1000){
                seconds++;
                miliSeconds = 0;
                
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            if(minutes === 60){
                hours++
                minutes = 0;
            }

            // colocando os numeros para a tela
            hEl.textContent = formatTime(hours);
            mEl.textContent = formatTime(minutes);
            sEl.textContent = formatTime(seconds);
            milsEl.textContent = formatTimeMiliSeconds(miliSeconds);
        }
    }, 10)
}

// criando uma função para formatação dos numeros do cronometro colocando o ZERo na frente
const formatTime = (numbers) => {
    return numbers < 10 ? `0${numbers}`: numbers;    
}

const formatTimeMiliSeconds = (numbers) => {
    return numbers < 100 ? `${numbers}`.padStart(3, '0') : numbers;
}

play.addEventListener('click', startTimer);



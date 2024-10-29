const play = document.querySelector("#play");
const refresh = document.querySelector("#refresh");
const save = document.querySelector("#save");
const timer = document.querySelector("#timer");
const placyMark = document.querySelector(".placy-Mark");
const hEl = document.querySelector(".h");
const mEl = document.querySelector(".m");
const sEl = document.querySelector(".s");
const milsEl = document.querySelector(".mls");


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
            hEl.textContent = hours;
            mEl.textContent = minutes;
            sEl.textContent = seconds;
            milsEl.textContent = miliSeconds;
        }
    }, 10)
}

play.addEventListener('click', startTimer);



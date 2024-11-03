const play = document.querySelector("#play");
const refresh = document.querySelector("#refresh");
const pouse = document.querySelector('.pause');
const save = document.querySelector("#save");
const timer = document.querySelector("#timer");
const placyMark = document.querySelector(".placy-Mark");
const hEl = document.querySelector("#h");
const mEl = document.querySelector("#m");
const sEl = document.querySelector("#s");
const milsEl = document.querySelector("#mls");
const numbers = document.querySelector("#number");
const btnLimpar = document.querySelector('#limpar-crono');

let tempo = 0;
let intervalo;
let rodando = false;

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliSeconds = 0;

function updateDisplay() {
    document.getElementById("timer").textContent =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (miliSeconds < 10 ? "0" + miliSeconds : miliSeconds);   
}

//Função para iniciar o cronometro
const startTimerStopGame = () => {
    //Para que o cronometro seja pausado a variavel (rodando) tem que ser verdadeira
    // logo após setamos ela como (false) para que o cronometro possa ser reiniciado novamente
    if(rodando){
        clearInterval(intervalo);
        rodando = false;
        play.innerHTML= '<i class="fa-solid fa-play"></i>';

    }else{

        intervalo = setInterval(() => {
            
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
            // milsEl.textContent = formatTimeMiliSeconds(miliSeconds);
            rodando = true;
            updateDisplay();
        
        }, 10);
    
        play.innerHTML=innerHTML= '<i class="fa-solid fa-pause"></i>';
    }
}

// criando uma função para formatação dos numeros do cronometro colocando o ZERo na frente
const formatTime = (numbers) => {
    return numbers < 10 ? `0${numbers}`: numbers;    
}

const formatTimeMiliSeconds = (numbers) => {
    return numbers < 100 ? `${numbers}`.padStart(3, '0') : numbers;
}


// função para resetar o tempo
const restartarTime = () => {
    play.innerHTML= '<i class="fa-solid fa-play"></i>';

    clearInterval(intervalo);
    rodando = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliSeconds = 0;
    updateDisplay();
}

const salvarRecorde = () => {
    const recordList = document.querySelector('#record-list');
    const novoRecord =  document.createElement('li');
    const trashRecord = document.createElement('button');

    
    // Formatando o tempo para que seja salvo na lista de recordes

    const tempoFormatado = `${formatTime(hours)}: ${formatTime(minutes)}: ${formatTime(seconds)}: ${formatTime(miliSeconds)}`
    novoRecord.innerText = tempoFormatado;
    
    
    //estilizando o novoRecord CSS
    novoRecord.style.display='flex';
    novoRecord.style.justifyContent='space-around';
    novoRecord.style.alignItems='center';
    
    
    trashRecord.innerHTML='<i class="fa-solid fa-trash"></i>';
    recordList.appendChild(novoRecord);
    novoRecord.appendChild(trashRecord);
}

// função para remover oque foi acumulado.
const limparRecorde = () => {
    let resul = alert("Tem certeza que deseja excluir tudo?");
    if(resul = 'sim'){
        const recordList = document.querySelector('#record-list');
        recordList.innerHTML= ''; // removendo tudo que foi acumulado no recorde.
    }
}

play.addEventListener('click', startTimerStopGame);
refresh.addEventListener('click', restartarTime);
save.addEventListener('click', salvarRecorde);
btnLimpar.addEventListener('click', limparRecorde);
const timerEl = document.querySelector("#timer");
const placyMark = document.querySelector(".placy-Mark");
let tempo = 0 // Temo em segundos
let intervalo; // armazena o intervalo
let rodando = false; // verifica se o cronometro está ativo
let marks = [] // servirá para guardar os valores do placy-mark

const hours = document.querySelector('.h');
const minutes = document.querySelector('.m');
const seconds = document.querySelector('.s');

//Criando a function que irá startar o cronometro
const atualizarDisplay = (tempoCorrido) =>{
    const horas = String(Math.floor(tempo / 360000)).padStart(2, "0");
    const minutos = String(Math.floor(tempo % 360000) / 6000).padStart(2, "0");
    const segundos = String(Math.floor(tempo % 6000)/ 100 ).padStart(2, "0");
    const milesimo = tempo % 100;
} 

//O cronometro será iniciado mudando assim o valor da variavel
// a variavel RODANDO será alterada para verdadeira e será atribuida uma fucttion para a 
// a variavel intervalo que acrescentará valor ao tempo e por sua vez chama a function atualizar display
const iniciarCronometro = () => {
  
}

//para esssa fuction so precisamos voltar a variavel RODANDO para o valor inicial
// e depois para a fuction que foi a tribuida para a varial INTERVALO
const pausarCronometro = () => {

}


// para voltar e restartar o cronometro basta chamar as duas function 
// pausarCronometro e atualizarDisplay e voltar o tempo para 0
const restartar = () =>{
   
}

document.getElementById('refresh').addEventListener('click', restartar);
document.getElementById('play').addEventListener('click', iniciarCronometro);
document.getElementById('pause').addEventListener('click', pausarCronometro);

atualizarDisplay();



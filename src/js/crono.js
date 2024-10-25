let tempo = 0 // Temo em segundos
let intervalo; // armazena o intervalo
let rodando = false; // verifica se o cronometro está ativo

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds')

//Criando a function que irá startar o cronometro
const atualizarDisplay = () =>{
    const h = String(Math.floor(tempo / 3600)).padStart(2, '0');
    const m = String(Math.floor((tempo % 3600) / 60)).padStart(2, '0');
    const s = String(Math.floor(tempo % 60)).padStart(2, '0');

    hours = document.textContent = h;
    minutes = document.textContent = m;
    seconds = document.textContent = s;
}

//O cronometro será iniciado mudando assim o valor da variavel
// a variavel RODANDO será alterada para verdadeira e será atribuida uma fucttion para a 
// a variavel intervalo que acrescentará valor ao tempo e por sua vez chama a function atualizar display
const iniciarCronometro = () => {
    if(!rodando){
        rodando = true;
        intervalo = setInterval = (() =>{
            tempo++
            atualizarDisplay();
        }, 1000)
    }
}

//para esssa fuction so precisamos voltar a variavel RODANDO para o valor inicial
// e depois para a fuction que foi a tribuida para a varial INTERVALO
const pausarCronometro = () => {
    rodando = false;

    clearInterval(intervalo);
}


// para voltar e restartar o cronometro basta chamar as duas function 
// pausarCronometro e atualizarDisplay e voltar o tempo para 0
const restartar = () =>{
    pausarCronometro();
    tempo = 0;
    atualizarDisplay();
}

document.getElementById('refresh').addEventListener('click', restartar);
document.getElementById('play').addEventListener('click', iniciarCronometro);
document.getElementById('pause').addEventListener('click', pausarCronometro);

atualizarDisplay();



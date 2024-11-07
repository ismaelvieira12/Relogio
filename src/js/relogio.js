
const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');
const relElement = document.querySelector('#relogio');
const cronometro = document.querySelector('#cornometro');
const containerCro = document.querySelector('#container-cro');
const containerField = document.querySelector('#container-field');
const placyMarks = document.querySelector('.placy-Mark');
const placyMarkRelogio = document.querySelector('.placy-Mark-relogio');
const btnAlarme = document.querySelector("#addAlarme");

const swapTurn = () => {
    console.log('Teste');
    containerField.classList.remove('hidden');
    containerCro.classList.add('hidden');
    placyMark.classList.add('hidden');
    placyMarkRelogio.classList.remove('hidden');
}
const swapTurnInve = () => {
    console.log('Teste');
    containerCro.classList.remove('hidden');
    containerField.classList.add('hidden');
    placyMarks.classList.remove('hidden');
    placyMarkRelogio.classList.add('hidden');  
}
relElement.addEventListener('click', swapTurn);
cronometro.addEventListener('click', swapTurnInve);


const relogio = setInterval(() =>{
    let time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if(h < 10){
        h = `0${h}`;
    }if(m < 10){
        m = `0${m}`
    }if(s < 10){
        s = `0${s}`;
    }

    hora.textContent = h;
    minuto.textContent = m;
    segundo.textContent = s; 
});


const addAlarme = () => {
    alert('testando');
}

btnAlarme.addEventListener('click', addAlarme);
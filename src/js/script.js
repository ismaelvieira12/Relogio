
const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');
const relElement = document.querySelector('#relogio');
const cronometro = document.querySelector('#cornometro');

const swapTurn = () => {
    console.log('Testge');
}

relElement.addEventListener('click', swapTurn);
cronometro.addEventListener('click', swapTurn);


const relogio = setInterval(() =>{
    let time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if(h < 10){
        h = `0${h}`;
    }
    else if(m < 10){
        m = `0${m}`;
    }
    else if(s < 10){
        s = `0${s}`;
    }
    hora.textContent = h;
    minuto.textContent = m;
    segundo.textContent = s; 
})

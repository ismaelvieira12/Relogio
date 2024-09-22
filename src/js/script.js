const relogio = document.querySelector('#relogio');
const cronometro = document.querySelector("#cronometro");
const boxTime = document.querySelector('.box-time');
const timeCro = document.querySelector('.time-cro');


relogio.addEventListener('click', () => {
    boxTime.classList.add('show');
    console.log('Teste');
});

cronometro.addEventListener('click', () => {
    timeCro.classList.add('show');
    boxTime.classList.add('hidden');
})
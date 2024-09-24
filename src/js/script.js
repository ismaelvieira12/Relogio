const relogio = document.querySelector('#relogio');
const cronometro = document.querySelector("#cronometro");
const boxTime = document.querySelector('.box-time');
const timeCro = document.querySelector('.time-cro');


relogio.addEventListener('click', () => {
   boxTime.classList.add('show');
   timeCro.style.display="none";
});

cronometro.addEventListener('click', () => {
    timeCro.style.display='flex'
    boxTime.style.display='none';
})
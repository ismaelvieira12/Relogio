let tempo = 0; // Tempo em segundos
let intervalo; // Para armazenar o intervalo
let rodando = false; // Verifica se o cronômetro está rodando

const hora = document.querySelector('.h');
const minuto = document.querySelector('.m');
const segundo = document.querySelector('.s');

const atualizarDisplay = () => {
    let h = String(Math.floor(tempo / 3600)).padStart(2, '0');
    let m = String(Math.floor((tempo % 3600) / 60)).padStart(2, '0');
    let s = String(tempo % 60).padStart(2, '0');

    hora.textContent = h;
    minuto.textContent = m;
    segundo.textContent = s;
};

const iniciarCronometro = () => {
    if (!rodando) {
        rodando = true;
        intervalo = setInterval(() => {
            tempo++;
            atualizarDisplay();
        }, 1000);
    }
};

const pausarCronometro = () => {
    rodando = false;
    clearInterval(intervalo);
};

const resetarCronometro = () => {
    pausarCronometro();
    tempo = 0;
    atualizarDisplay();
};

document.getElementById('refresh').addEventListener('click', iniciarCronometro);
document.getElementById('play').addEventListener('click', pausarCronometro);
document.getElementById('pause').addEventListener('click', resetarCronometro);

// Inicializa o display
atualizarDisplay();

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
const alarmaList = document.querySelector(".list-alarme");

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
    btnAlarme.style.display = 'none';
    alarmaList.style.display='flex';
    alarmaList.classList.remove('hidden');
    const btnAddAlarme = document.createElement('button');
    btnAddAlarme.innerHTML = '<button class="set-Alarme" id="addTask">Add Alarme</button>';
    btnAddAlarme.classList.add('set-Alarme');
    placyMarkRelogio.appendChild(btnAddAlarme);
    // const currentTime = document.querySelector('#currentTime');
    const selectMenu =  document.querySelectorAll('select');
    
    // Mudar o horário de AM para PM
    //Para colocar as horas na primeira select

    for (let h = 12; h > 0; h--) {
        h = h < 10 ? `0${h}`: h;
        let option = `<option value="${h}">${h}</option>`;
        selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
    }
    
    //Para colocar os minutos no segundo select
    for (let m = 59; m > 0; m--) {
        m = m < 10 ? `0${m}`: m;
        let option1 = `<option value="${m}">${m}</option>`;
        selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option1);
    }

    for (let i = 2; i > 0; i--) {
        ampm = i === 1 ? "AM" : "PM";
        i = i < 10 ? `0${i}`: i;
        let option1 = `<option value="${ampm}">${ampm}</option>`;
        selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option1);
    }

    
}

btnAlarme.addEventListener('click', addAlarme);

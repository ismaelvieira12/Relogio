
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
const select = document.querySelectorAll('select');

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
    btnAddAlarme.innerHTML = 'Add Alarme';
    btnAddAlarme.classList.add('set-Alarme');
    placyMarkRelogio.appendChild(btnAddAlarme);
    let ampm;

    
    
    

    //Mudar o horário de AM para PM
    for (let i = 2; i > 0; i--) {
        ampm = i;
        if(ampm )
        let option2 = `<option value="${ampm}">${ampm}</option>`;
        select[2].firstElementChild.insertAdjacentHTML("afterend", option2);
    }

    switch (ampm) {
        case 'AM':
            //Para colocar as horas na primeira select
            for (let h = 12; h > 0; h--) {
                if(h < 10){
                    h = `0${h}`;
                }
                let option = `<option value="${h}">${h}</option>`;
                select[0].firstElementChild.insertAdjacentHTML("afterend", option);
            }
            break;

        case 'PM':
            //Para colocar os minutos no segundo select
            for (let m = 59; m > 0; m--) {
                if(m < 10){
                    m = `0${m}`;
                }
                console.log(m);
                let option1 = `<option value="${m}">${m}</option>`;
                select[1].firstElementChild.insertAdjacentHTML("afterend", option1);
            }
            break;

        default:
            break;
    }
    
}

btnAlarme.addEventListener('click', addAlarme);
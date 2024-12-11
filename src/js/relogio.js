
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
let isAlarmSet, alarmeTime, ringTong = new Audio("src/img/audio.mp3");
let alertt = new Audio('src/img/alerta.mp3');
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
    const currentTime = document.querySelector('#currentTime');
    const selectMenu =  document.querySelectorAll('select');
    
    // Mudar o horário de AM para PM
    //Para colocar as horas na primeira select

    setInterval(() => {
        let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        ampm ="AM";

        if(hours >= 12){
            hours = hours - 12;
            ampm = "PM";
        }

        hours = hours == 0 ? hours = 12 : hours;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        currentTime.innerHTML = `${hours}:${minutes}:${seconds}`;

        if(currentTime === `${hora}:${minuto}:${ampm}`){
            ringTong.play();
            ringTong.loop;
        }
    })

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

    function setAlarme() {
        if(isAlarmSet){
            alarmeTime = '';
            ringTong.pause();

            return isAlarmSet = false;
        }

        let time = `${selectMenu[0].value} : ${selectMenu[1].value} : ${selectMenu[2].value}`;
        if(time.includes("Hour") || time.includes("Minutes") || time.includes("AM/PM")){
            alert.play();
            return alert('Insira horas e minutos válidos por favor!');
        }else{
            alert(`Alarme add com sucesso para: ${time}`);
        }

        alarmeTime = time;
        isAlarmSet = true;


        let ulEl = document.createElement('ul');
        let li = document.createElement('li');
        let trash = document.createElement('a');
        trash.style.cursor='pointer';
        trash.style.color="#B88B4A"
        li.innerHTML = `${time}`;
        trash.innerHTML='<i class="fa-solid fa-trash"></i>';
        ulEl.appendChild(li);
        li.appendChild(trash);
        placyMarkRelogio.appendChild(ulEl);

        li.style.marginBotto='5px';
        
        // Função para excluir a lista de alarmes.
        trash.addEventListener('click', () => {
            let res = confirm('Tem certeza que deseja excluir?');
            if(res == true){
                ulEl.innerHTML='';
            }
        })
    }
    btnAddAlarme.addEventListener('click', setAlarme);
    
}

btnAlarme.addEventListener('click', addAlarme);


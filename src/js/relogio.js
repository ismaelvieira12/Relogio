
const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');
const relElement = document.querySelector('#relogio');
const cronometro = document.querySelector('#cronometro');
const containerCro = document.querySelector('#container-cro');
const containerField = document.querySelector('#container-field');
const placyMarks = document.querySelector('.placy-Mark');
const placyMarkRelogio = document.querySelector('.placy-Mark-relogio');
const btnAlarme = document.querySelector("#addAlarme");
const alarmaList = document.querySelector(".list-alarme");
let isAlarmSet = false;
let alarmeTime = ""; 
let ringTong = new Audio("src/img/audio.mp3");
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

//Relogio principal
const relogio = setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Converte para formato 12h
    let currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    hora.textContent = hours.toString().padStart(2, '0');
    minuto.textContent = minutes.toString().padStart(2, '0');
    segundo.textContent = seconds.toString().padStart(2, '0');

    // ✅ Comparação corrigida para o alarme tocar
    if (isAlarmSet && currentTime === alarmeTime) {
        ringTong.play();
        ringTong.loop = true;
        alert('Alarme disparado!');
    }
}, 1000);


const addAlarme = () => {
    btnAlarme.style.display = 'none';
    alarmaList.style.display='flex';
    alarmaList.classList.remove('hidden');
    const btnAddAlarme = document.createElement('button');
    btnAddAlarme.textContent = 'Add Alarme';
    btnAddAlarme.classList.add('set-Alarme');
    placyMarkRelogio.appendChild(btnAddAlarme);
    const currentTime = document.querySelector('#currentTime');
    // const selectMenu =  document.querySelectorAll('select');
    
    // Mudar o horário de AM para PM
    //Para colocar as horas na primeira select

    const selectMenu = document.querySelectorAll('select');
    let hours = selectMenu[0].value;
    let minutes = selectMenu[1].value;
    let ampm = selectMenu[2].value;

    if (hours === "Horas" || minutes === "Minutos" || ampm === "AM/PM") {
        alertt.play();
        alert("Por favor, selecione um horário válido!");
        return;
    }

    alarmeTime = `${hours}:${minutes} ${ampm}`;
    isAlarmSet = true;

    alert(`Alarme adicionado para: ${alarmeTime}`);


        // alarmeTime = time;
        // isAlarmSet = true;


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


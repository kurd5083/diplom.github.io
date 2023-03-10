let btnRecord = document.getElementById('btn-record');
let btnSave = document.getElementById('btn-save');
let btnBack = document.getElementById('btn-back');
let btnChange = document.getElementById('btn-change');
let heading = document.querySelector('.heading');
let checkboxOne = document.getElementById('checkbox-one');
let checkboxTwo = document.getElementById('checkbox-two');
let checkboxThree = document.getElementById('checkbox-three');
let error = document.getElementById('error');
let input = document.querySelectorAll('input');
let labelFor = document.querySelectorAll('.labelFor');
let slider = document.querySelector('.slider');
let sliderLorem = document.getElementById('slider-lorem');
let DATA = [];
let n = 1; 
let arrayNumberName = 0;
let id1 = 1; let id2 = 2; let id3 = 3; let idDifference = 3;

btnBack.addEventListener('click', function(){
    if (DATA.length >= 1){
    document.querySelector('.form-question').classList.add("hide");
    let window = document.getElementById('window');
    window.innerHTML = `<div class="win"><h2 class="h2-name-back">Вы точно хотите вернуться в Главное меню?<br>(все введенные данные будут потеряны)</h2>
    <div class="win-btn">
    <a href = "mainMenu.html"><button>Вернуться</button></a>
    <button id="resume">Продолжить</button>
   </div></div>`;
    let resume = document.getElementById('resume');
    resume.addEventListener('click', function(){
        document.querySelector(".win").classList.toggle("win-anim");
        setTimeout(function(){
            document.querySelector('.form-question').classList.remove("hide");
            window.innerHTML = '';
        }, 1000);
    })
}else{
    document.location.href = "mainMenu.html"
}})

btnChange.addEventListener('click', function(){
    DATA.pop();
    console.log(DATA);
    if(n > 1){
        n--;
        id1-=idDifference;
        id2-=idDifference;
        id3-=idDifference;
    } 
    heading.innerHTML = `Вопрос ${n}`;
})

btnRecord.addEventListener('click', function(){
    heading.innerHTML = `Вопрос ${n}`
    if((document.fi.question.value != '')&&(document.fi.answerOne.value != '') &&
    (document.fi.answerTwo.value != '') &&(document.fi.answerThree.value != '') &&
    ((checkboxOne.checked != false) ||(checkboxTwo.checked != false) ||
    (checkboxThree.checked != false))){
        function Questions() {
            {this.question = document.fi.question.value,
                this.answers = [{id: id1,
                    value: document.fi.answerOne.value,
                    correct: checkboxOne.checked,},
                    {id: id2,
                        value: document.fi.answerTwo.value,
                        correct: checkboxTwo.checked,},
                        {id: id3,
                            value: document.fi.answerThree.value,
                            correct: checkboxThree.checked
                        }]
                    }}
                    DATA.push(new Questions);
                    console.log(DATA);
                    document.fi.question.value = '';
                    document.fi.answerOne.value = '';
                    document.fi.answerTwo.value = '';
                    document.fi.answerThree.value = '';
                    checkboxOne.checked = false;
                    checkboxTwo.checked = false;
                    checkboxThree.checked = false;
                    id1+=idDifference;
                    id2+=idDifference;
                    id3+=idDifference;
                    n++;
                    heading.innerHTML = `Вопрос ${n}`
                }else{
                    if(input[0].value == ''){input[0].classList.add("mistake");}else{input[0].classList.add("correctly");}
                    if((input[2].checked == false) && (input[4].checked == false) && (input[6].checked == false)){
                        labelFor[0].classList.add('label-error');
                        labelFor[1].classList.add('label-error');
                        labelFor[2].classList.add('label-error');}
                        if(input[1].value == ''){input[1].classList.add("mistake");}else{input[1].classList.add("correctly");}
                        if(input[3].value == ''){input[3].classList.add("mistake");}else{input[3].classList.add("correctly");}
                        if(input[5].value == ''){input[5].classList.add("mistake");}else{input[5].classList.add("correctly");}
                        if(input[7].value == ''){input[7].classList.add("mistake");}else{input[7].classList.add("correctly");}
                        error.innerHTML = "Введены не все данные, заполнитое поля.";
                    }
                    setTimeout(function(){
                        if(input[0].classList.contains("mistake")){input[0].classList.remove("mistake");}else{input[0].classList.remove("correctly");}
                        if(input[1].classList.contains("mistake")){input[1].classList.remove("mistake");}else{input[1].classList.remove("correctly");}
                        if(input[3].classList.contains("mistake")){input[3].classList.remove("mistake");}else{input[3].classList.remove("correctly");}
                        if(input[5].classList.contains("mistake")){input[5].classList.remove("mistake");}else{input[5].classList.remove("correctly");}
                        if(input[7].classList.contains("mistake")){input[7].classList.remove("mistake");}else{input[7].classList.remove("correctly");}
                        if(labelFor[0].classList.contains("label-error")){labelFor[0].classList.remove("label-error");}
                        if(labelFor[1].classList.contains("label-error")){labelFor[1].classList.remove("label-error");}
                        if(labelFor[2].classList.contains("label-error")){labelFor[2].classList.remove("label-error");}
                        error.innerHTML = '';
                    }, 3000);
                })

btnSave.addEventListener('click', function(){
    if (DATA.length >= 1 && (input[7].value != '')){
        const updateLocal = () => {
        localStorage.setItem(`DATA${arrayNumberName}`, JSON.stringify(DATA));
    }
    let inputName = document.getElementById('inputName');
    let recordeName = inputName.value;
    arrayNumberName+=1;
    document.querySelector('.form-question').classList.add("hide");
    let window = document.getElementById('window');
    window.innerHTML = `<div class="win"><h2 class="h2-name-save">Тест сохранен! <br>Чтобы пройти перейдите во вкладуку "Пройти тест".</h2>
    <div class="win-btn">
    <a href="mainMenu.html"><button id="resume">продолжить</button></a>
    </div>
    </div>`;
    updateLocal();
    sliderLorem.innerHTML = slider.value;
    localStorage.setItem('arrayNumberName', JSON.stringify(arrayNumberName));
    localStorage.setItem(`sliderLorem${arrayNumberName}`, JSON.stringify(sliderLorem.innerHTML));
    localStorage.setItem(`testName${arrayNumberName}`, JSON.stringify(recordeName));
} else{
    error.innerHTML = "Введены не все данные";
    setTimeout(function(){
        error.innerHTML = '';
    }, 3000);
}
})

arrayNumberName = JSON.parse(window.localStorage.getItem('arrayNumberName'));   
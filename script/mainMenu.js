let about = document.getElementById('about');

about.addEventListener('click', function(){
    document.querySelector('.form').classList.add("hide");
    document.querySelector('.footer-text').classList.add("hide");
    let window = document.getElementById('window');
    window.innerHTML = `<div class="win">
    <button id="clos">X</button>
    <div class="win-text">
    <h4>Инструкция по созданию тестов</h4>
    <p>Создать тест на нащем сайте легко! Наша инструкция поможет вам в этом:<br>
    <ol>
    <li> Придумайте название и время прохождение теста. Без названия ничего не получится.</li>
    <li> Укажите тексты вопросов и варианты ответов.</li>
    <li>***</li>
    </ol>
    </p>
    <p>И тест готов! Он сразу появится в разделе "Ваши тесты".
    Рекомендуем пройти тест и проверить, все ли работает как надо, а при необходимости - отредактировать его. Если все в порядке, то вы можете смело делиться ссылкой на тест с друзьями.
    </p>
    </div>
    </div>`;
    let clos = document.getElementById('clos');

clos.addEventListener('click', function(){
    window.innerHTML = '';
    document.querySelector('.form').classList.remove("hide");
    document.querySelector('.footer-text').classList.remove("hide");
})
})

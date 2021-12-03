var a = +prompt('Введите кол-во решаемых примеров:');
var min = +prompt('Введите минимальное число:');
var max = +prompt('Введите максимальное число:');
function rand(min, max) {
    let random = Math.floor(Math.random() * (max - min) + min);
    return random;
}

for(let i = 0; i < a; i++){
    var b = rand(min, max);
    var c = rand(min, max);

    var oper = '';
    var  char = rand(1, 4);

    switch (char) {
        case 1:
            var oper = "+";
            var answ = b + c;
            break;
        case 2:
            var oper = "-";
            var answ = b - c;
            break;
        case 3:
            var oper = '*';
            var answ = b * c;
            break;
        case 4:
            var oper = '/';
            var answ = b / c;
            break;
    }


    var answer = prompt(b + oper + c)


    if (answ == answer) {
        alert('Правильный ответ: ' + answ + '\nВаш ответ: ' + answer + ' и это верно');
    }
    else {
        alert('Правильный ответ: ' + answ + '\nВаш ответ: ' + answer + ' и это неверно');
    }
}

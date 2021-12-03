



var userName = prompt('Ваше имя');
var userAge = prompt('Ваш год рождения');
var worldAge = prompt('Нынешний год');

function age(){
    let lage = worldAge - userAge;
    return lage; 
}

alert(userName + ', ваш возраст составляет: '+ age() + ' лет')
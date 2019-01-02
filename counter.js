// Анонимная самовызывающаяся функция
// Запишем функцию в переменную counter
var counter = (function(){
    // Приватные переменные
    var _number;

    // Приватные методы
    var _checkPositive = function(x){
         if(x < 0){
	         return false;
	         }else {
		         return true;
	         }
    }

    // Публичные методы
    var setValue = function(x){
        if (_checkPositive(x)) {
            _number = x;
        } else {
            console.log('Неверное значение');
        }
    }

    var increaseCounter = function(){
        _number++;
    }

    var decreaseCounter = function(){
        _number--;
    }

    var printCounter = function(){
        console.log(_number);
    }

    // Чтобы иметь доступ к внутренним переменным, их надо вернуть через return
    return {
        setValue,
        increaseCounter,
        decreaseCounter,
        printCounter
    }
}());

counter.setValue(-3);
counter.printCounter();

counter.setValue(1);
counter.increaseCounter();
counter.printCounter();
counter.decreaseCounter();
counter.printCounter();

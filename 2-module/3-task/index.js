let calculator = {
  read: function(a,b) {
    this.c = a;
    this.d = b;
  },
  sum: function() {
    return this.c + this.d
  },
  mul: function() {
    return this.c * this.d
  },
  c: 0,
  d: 0,
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
/*Создайте объект calculator (калькулятор) с тремя методами:

read(a, b) (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/

/*calculator.read(4, 6);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15*/
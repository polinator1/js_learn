/*
Создайте объект calculator (калькулятор) с тремя методами:
    read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read () {
        this.a = +prompt("Type in a:", "")
        this.b = +prompt("Type in b:", "")
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
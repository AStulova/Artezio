alert("Hello!")

//выводятся числа от 10 до 20 включительно
for (var i = 10; i <= 20; i++) {
    console.log(i);
}

//выводятся квадраты чисел от 10 до 20 включительно
for (var i = 10; i <= 20; i++)
{
    console.log(Math.pow(i,2));
}

//выводится сумма всех чисел от 10 до 20
var n = 0;
for (var i = 10; i <= 20; i++) {
    n += i;
}
console.log(n);
/*Задание 1.1 - Функция, которая возвращает параметр на входе*/
function ArgumentInOut(arg)
{
	return arg;
}

/*Задание 1.2 - 2 аргумента = сумма*/
function ArgumentSum(arg1, arg2)
{
	return arg1 + arg2;
}

/*Задание 1.3 - Массив, числа возвести в квадрат, не числа превратить в 0*/

function ArrTest()
{
	console.log("Массив в функции для обработки");
	let Arr = ["Become", 13, "As", 17, "Gods!", 5, 25];
	console.log(Arr);
	/*Супер цикл для обработаки массивчика*/
	for(let i = 0; i<Arr.length; i++)
	{
		if (isNaN(Arr[i]))
			Arr[i] = 0;
		else
			Arr[i] *= Arr[i];
	}
	console.log("Массив в функции после обработки");
	console.log(Arr);
}
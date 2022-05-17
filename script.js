/////////////////////////////////////////////////
/* Here I have creat the calculator with the help of 
1. prompt (work as a calculator screen), 
2. function (helps to do calculation method), 
3.console (It's a place where value will be shown.).
   here when we store the value it's calculate according to there assign calculation method in the function and then after it will get store in array by help of push method.
*/
console.log(`-----------calculator-----------`);

const calculateValue = []; // Array

const simpleCalc = function () {
	const multiply = prompt("Multiplier *") * prompt("Multiplicand *");

	const divide = prompt("Dividend /") / prompt("Divisor /");

	const plus = Number(prompt("Add First +")) + Number(prompt("Add Second +"));

	const minus = prompt("Minus First -") - prompt("Minus Second -");

	calculateValue.push(multiply, divide, plus, minus);
	//push method use to push value in array

	console.log(calculateValue);

	return calculateValue;
};

simpleCalc();

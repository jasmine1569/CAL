
//list of variables//
var operators = '';
var current = '';
var total = 0;
var calculate = 0;
var first = 0;

//list of numbers//
document.getElementById('btn-9').addEventListener('click',function() {
	add('9');
});

document.getElementById('btn-8').addEventListener('click',function () {
	add('8');
});

document.getElementById('btn-7').addEventListener('click',function () {
	add('7');
});

document.getElementById('btn-6').addEventListener('click',function () {
	add('6');
});

document.getElementById('btn-5').addEventListener('click',function () {
	add('5');
});

document.getElementById('btn-4').addEventListener('click',function () {
	add('4');
});

document.getElementById('btn-3').addEventListener('click',function () {
	add('3');
});

document.getElementById('btn-2').addEventListener('click',function () {
	add('2');
});

document.getElementById('btn-1').addEventListener('click',function () {
	add('1');
});

document.getElementById('btn-0').addEventListener('click',function () {
	add('0');
});

document.getElementById('btn-dot').addEventListener('click',function () {
	add('.');
});




//list of operators//
document.getElementById('btn-times').addEventListener('click',multiplication);

document.getElementById('btn-div').addEventListener('click',divide);

document.getElementById('btn-per').addEventListener('click',percentage);

document.getElementById('btn-plus').addEventListener('click',addition);

document.getElementById('btn-minus').addEventListener('click',substration);

document.getElementById('btn-c').addEventListener('click',clear);

document.getElementById('btn-arrow').addEventListener('click',back);

document.getElementById('btn-total').addEventListener('click',compute);


function add(val) {
	if (calculate == 1){
		calculate = 0;
		current = val;
	}

	else{
		current = current.concat(val);
	}

	document.getElementById('inner').innerHTML = current;
}

function addition() {
	compute();
	operators = '+';
}

function substration() {
	compute();
	operators = '-';
}

function multiplication() {
	compute();
	operators = '*';
}

function divide() {
	compute();
	operators = '/';
}

function percentage() {
	compute();
	operators = '%';
}

function compute() {
	if (current == '' && total == 0 ) {
		document.getElementById('inner').innerHTML = 'INVAILD';
	}

	else{
		compute = '';
		current = '';
		first = 0;
		operators = '';
		calculate = 1;
		total = 0;

	}
}

function clear() {
	current = '';
	first = 0;
	operators = '';
	calculate = 0;
	total = 0;

	document.getElementById('inner').innerHTML = '0';
}

function back() {
	if(current != ''){
		current = current.substring(0, current.length -1);
		document.getElementById('inner').innerHTML = current;
	}

	else {
		total = 0;
		document.getElementById('inner').innerHTML = '0';
	}
}

function compute() {
	if (operators == '+') {
		total = total + parseFloat(current);
		calculate = 1;
		document.getElementById('inner').innerHTML = total;
	}

	else if (operators == '*') {
		total = total * parseFloat(current);
		calculate = 1;
		document.getElementById('inner').innerHTML = total;
	}

	else if (operators == '-') {
		total = total - parseFloat(current);
		calculate = 1;
		document.getElementById('inner').innerHTML = total;
	}

	else if (operators == '%'){
		total = (parseFloat(total))/100;
		calculate = 1;
		document.getElementById('inner').innerHTML = total;
	}

	else if (operators == '/') {
		if (parseFloat(current) == 0 && total != 0) {

			if (String(total).charAt(0) == '-') {

				total = Infinity;
			}

			else {
				total = Infinity;
			}
		}

		else {
			total = total / parseFloat(current);
			calculate = 1;
			document.getElementById('inner').innerHTML = total;
		}
		
	}

	else if (first == 0) {
		total = parseFloat(current);
		current = '';
		first = 1;
		calculate = 1;
	}
};



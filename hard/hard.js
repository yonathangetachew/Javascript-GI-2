//HARD: Given the information below for Tom and Jerry. 
//Tom - 	height:  9in   	mass: 8 g
//Jerry - 	height: 10in 	mass: 45 g
//Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    //BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
    //HARD: Given the information below for Tom and Jerry. 
    //Tom - 	height:  9in   	mass: 8 g
    //Jerry - 	height: 10in 	mass: 45 g
    //Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    //BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

var tm1 = 8;
var th1 = 9;


var jm1 = 45;
var jh1 = 10;


let bmi1 = (tm1 / (th1 * th1));
let bmi2 = (jm1 / (jh1 * jh1));


let tomHigherBMI = (bmi1 > bmi2);
let jerryHigherBMI2x = (bmi2 > bmi1);

console.log(`Tom BMI ${bmi1}`);
console.log(`Jerry BMI ${bmi2}`);
console.log(`Is Toms BMI higher than Jerry? ${tomHigherBMI}`);
console.log(`Is Jerrys BMI higher than Toms? ${jerryHigherBMI2x}`);


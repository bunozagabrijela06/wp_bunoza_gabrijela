/* let broj1 = prompt("Unesi prvi broj:");
let broj2 = prompt("Unesi drugi broj:");
if(broj1 > broj2)
{
    alert(broj1 + " je veći od " + broj2);
}
else if(broj1 < broj2)
{
    alert(broj2 + " je veći od " + broj1);
}
else
{
    alert("Brojevi su jednaki");
} */

  /*   BMI App 

    BMI = masa (kg) / (visina (m) * visina (m)) */
    /*  - unijeti masu i visinu 
     - ispisati bmi (vaš BMI iznosi: XX) */
let masa = prompt("Unesi svoju masu u kg:");
let visina = prompt("Unesi svoju visinu u metrima:");
let bmi = Math.round(masa / (visina * visina));
alert("Vaš BMI iznosi: " + bmi);


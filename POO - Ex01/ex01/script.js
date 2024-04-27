function calcImc(peso, altura, mostrar){
    let cont = 0;
    let imc = peso / (altura * altura);
    alert(imc);
    if(imc < 18.5){
        cont += 1;
        console.log("ABaixo do peso");
    }

    if(imc >= 18.5 && imc <= 24.9){
        cont += 1;
        console.log("Peso normal");
        window.document.getElementById("mostrar").innerHTML = "'Peso normal";
    }

    if(imc >= 25.0 && imc <= 29.9){
        cont += 1;
        console.log("Excesso de peso");
        window.document.getElementById("mostrar").innerHTML = 'Excesso de peso';
    }

    if(imc >= 30.0 && imc <= 34.9){
        cont += 1;
        console.log("Obesidade classe I");
        window.document.getElementById("mostrar").innerHTML = 'Obesidade classe I';
    }

    if(35 <= imc && imc <= 39.9){
        cont += 1;
        console.log('Obesidade classe II');
        window.document.getElementById("mostrar").innerHTML = 'Obesidade classe II';
    }

    if( imc >= 40){
        cont += 1;
        console.log("Obesidade classe III");
        window.document.getElementById("mostrar").innerHTML = 'Obesidade classe III';
    }
}

function dados(){
    let peso = window.document.getElementById("peso").value;
    let altura = window.document.getElementById("altura").value;
    let mostrar = window.document.getElementById('mostrar');

   parseFloat(altura);
   
    calcImc(peso, altura);
}
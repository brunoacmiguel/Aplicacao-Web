function calcular(base, altura){
     const area = base * altura;
     document.getElementById("mostrar").innerHTML = "A área do retângulo é: " + area.toFixed(2) + ' metros!';
     console.log(area);
}

function mostrar(){
    let base = window.document.getElementById("base").value;
    let altura = window.document.getElementById('altura').value;
    calcular(base, altura);
}
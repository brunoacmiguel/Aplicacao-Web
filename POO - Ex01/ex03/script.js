function dadosF(){
    let fahren = window.document.getElementById("temp1").value;
    parseInt(fahren);
    const graus = (fahren - 32) / 9/5;
    window.document.getElementById("mostrar").innerHTML = fahren + "° Fahrenheit para graus é: " + graus.toFixed(2) + "° graus";
}

function dadosG(){
    let graus = window.document.getElementById("temp1").value;
    parseInt(graus);
    const fahren = (graus * 9/5) + 32;
    window.document.getElementById("mostrar").innerHTML = graus + "° Graus para fahrenheit: " + fahren.toFixed(2) + "° fahrenheit";
}

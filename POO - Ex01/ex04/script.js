let estadomoedal = "";
let convert = 0;

let botaousd = window.document.getElementById("usd");
let botaogbp = window.document.getElementById("gbp");
let botaoeur = window.document.getElementById("eur");
let botaobrl = window.document.getElementById("brl");

const taxaUSD = 5.50;
const taxaEUR = 6.50;
const taxaGBP = 7.50;
const taxaBRL = 1.00;

function real(){
   let num1 = window.document.getElementById("n1").value;
   estadomoedal = "real";
   window.document.getElementById("moedaatual").innerHTML = "Moeda atual é REAL: BRL";
   return num1;
}

function libra(){
    let num1 = window.document.getElementById("n1").value;
    estadomoedal = 'libra';
    window.document.getElementById("moedaatual").innerHTML = "Moeda atual é LIBRA: GBP";
    return num1;
}

function euro(){
    let num1 = window.document.getElementById("n1").value;
    estadomoedal = "euro";
    window.document.getElementById("moedaatual").innerHTML = "Moeda atual é EURO: EUR";
    return num1;
}

function dolar(){
    let num1 = window.document.getElementById("n1").value;
    estadomoedal = "dolar";
    window.document.getElementById("moedaatual").innerHTML = "Moeda atual é DOLAR: USD";
    return num1;
}














botaobrl.onclick = function(){
    if(estadomoedal === "real"){
        let num1 = real();
        convert = num1 * taxaBRL/taxaBRL;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " reais em BRL é igual a: " + convert + " reais";
    }



    if(estadomoedal === "libra"){
        let num1 = libra();
        convert = num1 * taxaGBP/taxaBRL;
        window.document.getElementById("result").innerHTML = num1 + " libras em BRL é igual a: " + convert.toFixed(2) + " libras";
    }
    if(estadomoedal === "euro"){
        let num1 = euro();
        convert = num1 * taxaEUR/taxaBRL;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " euros em BRL é igual a: " + convert.toFixed(2) + " euros";
    }
    if(estadomoedal === "dolar"){
        let num1 = dolar();
        convert = num1 * taxaUSD/taxaBRL;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " dolares em BRL é igual a: " + convert.toFixed(2) + " dolares";
    }
}

botaogbp.onclick = function(){
    if(estadomoedal === "real"){
        let num1 = real();
        convert = num1 * taxaBRL/taxaGBP;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " reais em GBP é igual a: " + convert.toFixed(2) + " libras";
    }

    if(estadomoedal === "libra"){
        let num1 = libra();
        convert = num1 * taxaGBP/taxaGBP;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " libras em GBP é igual a: " + convert.toFixed(2) + " libras";
    }
    if(estadomoedal === "euro"){
        let num1 = euro();
        convert = num1 * taxaEUR/taxaGBP;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " euros em GBP é igual a: " + convert.toFixed(2) + " libras";
    }
    if(estadomoedal === "dolar"){
        let num1 = dolar();
        convert = num1 * taxaUSD/taxaGBP;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " dólares em GBP é igual a: " + convert.toFixed(2) + " líbras";
    }
}

botaoeur.onclick = function(){
    if(estadomoedal === "real"){
        let num1 = real();
        convert = num1 * taxaBRL/taxaEUR;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " reais em EUR é igual a: " + convert.toFixed(2) + " euros";
    }

    if(estadomoedal === "libra"){
        let num1 = libra();
        convert = num1 * taxaGBP/taxaEUR;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " libras em EUR é igual a: " + convert.toFixed(2) + " euros";
    }
    if(estadomoedal === "euro"){
        let num1 = euro();
        convert = num1 * taxaEUR/taxaEUR;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " euros em EUR é igual a: " + convert.toFixed(2) + " euros";
    }
    if(estadomoedal === "dolar"){
        let num1 = dolar();
        convert = num1 * taxaUSD/taxaEUR;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " dólares em EUR é igual a: " + convert.toFixed(2) + " euros";
    }
}
botaousd.onclick = function(){
    if(estadomoedal === "real"){
        let num1 = real();
        convert = num1 * taxaBRL/taxaUSD;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " reais em USD é igual a: " + convert.toFixed(2) + " dólares";
    }

    if(estadomoedal === "libra"){
        let num1 = libra();
        convert = num1 * taxaGBP/taxaUSD;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " líbras em USD é igual a: " + convert.toFixed(2) + " dólares";
    }
    if(estadomoedal === "euro"){
        let num1 = euro();
        convert = num1 * taxaEUR/taxaUSD;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " euros em USD é igual a: " + convert.toFixed(2) + " dólares";
    }
    if(estadomoedal === "dolar"){
        let num1 = dolar();
        convert = num1 * taxaUSD/taxaUSD;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " dólares em USD é igual a: " + convert.toFixed(2) + " dólares";
    }
}

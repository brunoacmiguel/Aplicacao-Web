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



botaousd.onclick = function(){
    if(estadomoedal === "real"){
        let num1 = real();
        convert = num1 * taxaUSD / taxaBRL;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " dolares em reais ficaria: " + convert.toFixed(2) + " reais"
    }
    if(estadomoedal === "euro"){
        let num1 = euro();
        convert = num1 *  taxaUSD / taxaEUR;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " euros em dólar ficaria: " + convert.toFixed(2) + " dólares"
    }
    if(estadomoedal === "libra"){
        let num1 = libra();
        convert = num1 * taxaUSD / taxaGBP;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " libras em dólar ficaria: " + convert.toFixed(2) + " dólares"
    }

    if(estadomoedal === "dolar"){
        let num1 = dolar();
        convert = num1 * taxaUSD / taxaUSD;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " dólares em dólar ficaria: " + convert.toFixed(2) + " dólares"
    }
}

botaogbp.onclick= function(){
    if(estadomoedal === "real"){
        let num1 = real();
        convert = num1 * taxaGBP / taxaBRL;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " libras em real ficaria: " + convert.toFixed(2)+ " reais";
    }
    if(estadomoedal === "euro"){
        let num1 = euro();
        convert = num1 *  taxaGBP/ taxaEUR;
        alert(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " euros em líbra ficaria: " + convert.toFixed(2)+ " líbras";
    }
    if(estadomoedal === "libra"){
        let num1 = libra();
        convert = num1 * taxaGBP / taxaGBP;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " libras em líbra ficaria: " + convert.toFixed(2) + " líbras";
    }

    if(estadomoedal === "dolar"){
        let num1 = dolar();
        convert = num1 * taxaGBP / taxaUSD;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " dólares em líbra ficaria: " + convert.toFixed(2) + " líbras";
    }
}

botaoeur.onclick = function(){
    if(estadomoedal === "real"){
        let num1 = real();
        convert = num1 * taxaEUR / taxaBRL;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " euros em real ficaria: " + convert.toFixed(2) + " euros";
    }
    if(estadomoedal === "euro"){
        let num1 = euro();
        convert = num1 *  taxaEUR/ taxaEUR;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " reais em euro ficaria: " + convert.toFixed(2) + " reais";
    }
    if(estadomoedal === "libra"){
        let num1 = libra();
        convert = num1 * taxaEUR / taxaGBP;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " libras em euros ficaria: " + convert.toFixed(2) + " euros";
    }

    if(estadomoedal === "dolar"){
        let num1 = dolar();
        convert = num1 * taxaEUR / taxaUSD;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " dólares em euros ficaria: " + convert.toFixed(2) + " euros";
    }
}

botaobrl.onclick = function(){
    if(estadomoedal === "real"){
        let num1 = real();
        convert = num1 * taxaBRL / taxaBRL;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " reais em real ficaria: " + convert.toFixed(2)+ " reais";
    }
    if(estadomoedal === "euro"){
        let num1 = euro();
        convert = num1 *  taxaBRL/ taxaEUR;
        alert(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " reais em euro ficaria: " + convert .toFixed(2)+ " euros";
    }
    if(estadomoedal === "libra"){
        let num1 = libra();
        convert = num1 * taxaBRL / taxaGBP;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " reais em libras ficaria: " + convert.toFixed(2) + " libras";
    }

    if(estadomoedal === "dolar"){
        let num1 = dolar();
        convert = num1 / taxaUSD;
        console.log(convert.toFixed(2));
        window.document.getElementById("result").innerHTML = num1 + " reais em  dólares: " + convert.toFixed(2) + " dolares";
    }
}
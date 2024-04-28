function convert(){
    const api_id = "07dae1e20dd5424e8ca5dcce034e6a73";
    const url = "https://openexchangerates.org/api/latest.json?app_id=07dae1e20dd5424e8ca5dcce034e6a73";

    let moeda1 = window.document.getElementById("moeda1").value;
    let moeda2 = window.document.getElementById("moeda2").value;
    let valor = window.document.getElementById("valor").value;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let codigomoeda = data.rates[moeda1];
        let moneyConvert = data.rates[moeda2];

        let valconvertido = (valor / codigomoeda * moneyConvert);

        document.getElementById("result").innerHTML = "O resultado da conversão é " + valconvertido.toFixed(2); 
    })
    .catch(error => console.error("Erro ao buscar"));
}

    
 
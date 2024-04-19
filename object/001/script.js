console.log("Olá mundo!");

let obj = {
    nome: "Ana",
    idade: "13",

    carro: {
        cor: "preto",
        placa: "1234567",
        ano: '1997',
        componentes: ["Retrovisor", "Pneu"]
    }
}
obj.carro.componentes[0] = "Placa";
console.log(obj.carro.componentes[0]);
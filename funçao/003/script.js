function loop(x){
    if (x >= 10){
        return;
    }
    // "x >= 10" a condição de parada (equivalente a "!(x < 10)")
    
  // faça coisas
  loop(x + 1); // chamada recursiva
}

console.log(loop(2));

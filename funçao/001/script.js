function soma(a, b, c){
    let p2 = 2 * a;
    let delta = b * b - 4*a*c;

    let rp = (-b + Math.sqrt(delta));
    let rn = (-b - Math.sqrt(delta));

    let vx = -b / p2;
    let vy = -delta / 4 * a;
    if(delta >= 0){
        alert("Equação: "  + a + "x² +  " + b + "x + " + c + "\nPrimeiro x: " + rp / p2 + "\nSegundo x: " + rn / p2);
        window.document.getElementById("equaçao").innerHTML = "Equação: "  + a + "x² +  " + b + "x + " + c;
        window.document.getElementById("raizes").innerHTML = "O momento em que a parábola corta o eixo x respectivamente: " + (rp / p2).toFixed(2) + " e " + (rn / p2).toFixed(2);
        window.document.getElementById("verticex").innerHTML = "Vértice da parábola no eixo x: " + vx.toFixed(2);
        window.document.getElementById("verticey").innerHTML = "Vértice da parábola no eixo y; " + vy.toFixed(2);
    }
    
    else{
        alert("Delta menor que 0, refaça sua conta")
        window.document.getElementById("equaçao").innerHTML = "Equação: "  + a + "x² +  " + b + "x + " + c;
        window.document.getElementById("raizes").innerHTML = "O momento em que a parábola corta o eixo x respectivamente: " + "Raizes inexistentes";
    }
}

let btn = window.document.getElementById("acionar");
btn.addEventListener("click", acionar);

function acionar(){
    let a = window.document.getElementById("a").value;
    let b = window.document.getElementById("b").value;
    let c = window.document.getElementById("c").value;
    soma(a, b, c);
}

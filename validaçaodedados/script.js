
let btn = window.document.getElementById("cliquer");
btn.addEventListener("click", validar);

let valido = true;

function validar(){
    let nome = window.document.getElementById("nome").value;
    let nin = window.document.getElementById("nin");
    window.localStorage.setItem("nome", nome);

    let email = window.document.getElementById("email").value;
    let ein = window.document.getElementById("ein");
    window.localStorage.setItem("email", email);

    let data = window.document.getElementById("data").value;
    let din = window.document.getElementById("din");
    window.localStorage.setItem("nasc", data);
    
    let txt = window.document.getElementById("curri").value;
    let tam = txt.length;
    let tin = window.document.getElementById("tin");


    let valnome = /^[A-Z][a-z]/;
    let valemail = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    let valdata = /^(?:(?:31\/(?:0?[13578]|1[02]))\/|(?:(?:29|30)\/(?:0?[1,3-9]|1[0-2])\/))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29\/0?2\/(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])\/(?:0?[1-9]|1[0-2])\/(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    if (valnome.test(nome)) {
        window.document.getElementById("nome").style.border = "";
        nin.style.visibility = "hidden";

    } 
    else{
        nin.style.color = "red";
        window.document.getElementById("nome").style.border = "red solid 2px";
        nin.style.visibility = "visible";
        valido = false;
    }



    if(valemail.test(email)){
        ein.style.visibility = "hidden";
        window.document.getElementById("email").style.border = "none";
        
    }

    else {
        ein.style.visibility = "visible";
        ein.style.color = "red";
        window.document.getElementById("email").style.border = "red solid 2px";
        valido = false;
    }



    if(valdata.test(data) == true){
        din.style.visibility = "hidden";
        window.document.getElementById("data").style.border = "none";
        
    }

    else{
        din.style.visibility = "visible";
        din.style.color = "red";
        window.document.getElementById("data").style.border = "red solid 2px";
        valido = false;
       
    }



    if(tam >= 20 && tam <= 500){
        tin.style.visibility = "hidden";
        window.document.getElementById("curri").style.border = "none";
    }

    else if(tam < 20 || tam > 500){
        tin.style.visibility = "visible";
        tin.style.color = "red";
        window.document.getElementById("curri").style.border = "red solid 2px";
        valido = false;
    }

    if(valido == false){
        event.preventDefault();
    }
    
    alert(valido);
    valido = true;
}

function login(){
    let lnome = window.document.getElementById("lnome").value;
    let lmail = window.document.getElementById("lmail").value;
    let ldata = window.document.getElementById("ldata").value;

    alert(localStorage.getItem("nome"));

    if(localStorage.getItem("nome") == lnome && localStorage.getItem("email") == lmail && localStorage.getItem("nasc") == ldata){
        alert("Logado");
    }
   
}


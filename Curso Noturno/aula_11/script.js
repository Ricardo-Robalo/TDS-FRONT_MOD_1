var cont = 0;

foto = [
    "57c1c26fc0b812.webp",
    "545.png",
    "802.png",
    "445_f2.webp",
    "721.png",
    "486.png",
    "720_f2.png"
]

function rodaroda(){

    if (cont < 6) {

        cont++;
    } else {

        cont = 0;
    }
    console.log(cont)

    document.getElementById("fotoPikemon").src = foto[cont];

}

function mesiga(){

    alert("Me segue aí =D");
}

function naoouse(){

    alert("Não julgue minhas musgas >=|");
}

function borabora(){

    alert("Bora jogar junto, me add aí >=D");
}
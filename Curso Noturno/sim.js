
//Atividade 1
function numCarac(nome) {

    let posicao = nome.length;

    console.log(`Atividade 1`);
    console.log(`O nome tem ${posicao} caracteres`);
}

numCarac("kindercarnavalsoptochtvoorbereidingswerkzaamheden");

//_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

//Atividade 2
function tracinho(nome2){

    let nomeTraco = '';

    for(var i = 0; i < nome2.length; i++){

        nomeTraco += nome2[i];

        if(i < nome2.length - 1){

            nomeTraco += '-';
        }
    }

    console.log(`Atividade 2`);
    console.log(nomeTraco);
}

tracinho("Ricardo");

//_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

//Atividade 3
function dxGrd(nome3){

    let nomeNovo = '';

    for(var i = 0; i < nome3.length; i++){

        let codChar = nome3.charCodeAt(i);

        if(codChar >= 97 && codChar <= 122){

            codChar -= 32;
        }

        nomeNovo += String.fromCharCode(codChar);
    }

    console.log(`Atividade 3`);
    console.log(nomeNovo);
}

dxGrd("ricardo");

//_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

//Atividade 4 
function dxPqn(nome4){

    let nomeNovop = '';

    for(var i = 0; i < nome4.length; i++){

        let codChar = nome4.charCodeAt(i);

        if(codChar >= 65 && codChar <= 90){

            codChar += 32;
        }

        nomeNovop += String.fromCharCode(codChar);
    }

    console.log(`Atividade 4`);
    console.log(nomeNovop);
}

dxPqn("RICARDO");

//_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

//Atividade 5
function gramaticalmenteCorreto(nome5){

    let codigu = nome5.charCodeAt(0);

    let nomeCorrigidu = '';

    if(codigu >=97 && codigu <= 122){

        nomeCorrigidu += String.fromCharCode(codigu - 32);
    }

    for(var i = 1; i < nome5.length; i++){

        nomeCorrigidu += nome5[i];
    }

    console.log(`Atividade 5`);
    console.log(nomeCorrigidu);
}

gramaticalmenteCorreto("ricardo");

//_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

//Atividade 6
//R: Sim
function nomeComp(nome6){

    let codigu = nome6.charCodeAt(0);

    let nomeCorrigidu = '';

    if(codigu >=97 && codigu <= 122){

        nomeCorrigidu += String.fromCharCode(codigu - 32);
    }

    for(var i = 1; i < nome6.length; i++){

        nomeCorrigidu += nome5[i];
    }

    console.log(`Atividade 6`);
    console.log(nomeCorrigidu);
}
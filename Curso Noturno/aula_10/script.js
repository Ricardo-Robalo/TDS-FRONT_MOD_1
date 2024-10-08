const tabuleiro = document.getElementsByClassName("campo");
const resultado = document.getElementById("resultado");
const resultado_x = document.getElementById("resultado_x");
const resultado_o = document.getElementById("resultado_o");
const empate = document.getElementById("empate");
const jogador_atual = document.getElementById("jogador_atual");

var uvc = "";
var block_game = false;
var vitoriaX = 0;
var vitoriaO = 0;
var cont_empate = 0;

function marcar(posicao) {

    if((tabuleiro[posicao].innerHTML == "") && (block_game == false)){

        if(uvc == "O"){

            tabuleiro[posicao].innerHTML = "O"
            uvc = "X";
            jogador_atual.innerHTML = "JOGADOR ATUAL: X";
        } else{

            tabuleiro[posicao].innerHTML = "X"
            uvc = "O";
            jogador_atual.innerHTML = "JOGADOR ATUAL: O";
        }

        // VALIDADORES
        if(valida_tabuleiro("X") || valida_tabuleiro("O")){

            if(uvc == "X"){

                resultado.innerHTML = "O ganhador Foi O";
                vitoriaO++;
                resultado_o.innerHTML = "O: " + vitoriaO;
            } else{

                resultado.innerHTML = "O ganhador Foi X";
                vitoriaX++;
                resultado_x.innerHTML = "X: " + vitoriaX;
            }

            block_game = true;

        } else if(valida_empates()){

            cont_empate++;
            empate.innerHTML = "EMPATES: " + cont_empate;
        }

    }
}

function valida_tabuleiro(valor){

    if(tabuleiro[0].innerHTML == valor &&
        tabuleiro[1].innerHTML == valor &&
        tabuleiro[2].innerHTML == valor) {
        console.log("Fechou linha 1, e ganhador é: ", valor);
        return true;

    } else if(tabuleiro[3].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[5].innerHTML == valor) {
        console.log("Fechou linha 2, e ganhador é: ", valor);
        return true;

    } else if(tabuleiro[6].innerHTML == valor &&
        tabuleiro[7].innerHTML == valor &&
        tabuleiro[8].innerHTML == valor) {
        console.log("Fechou linha 3, e ganhador é: ", valor);
        return true;

    } else if(tabuleiro[0].innerHTML == valor &&
        tabuleiro[3].innerHTML == valor &&
        tabuleiro[6].innerHTML == valor) {
        console.log("Fechou coluna 1, e ganhador é: ", valor);
        return true;

    } else if(tabuleiro[1].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[7].innerHTML == valor) {
        console.log("Fechou coluna 2, e ganhador é: ", valor);
        return true;

    } else if(tabuleiro[2].innerHTML == valor &&
        tabuleiro[5].innerHTML == valor &&
        tabuleiro[8].innerHTML == valor) {
        console.log("Fechou coluna 3, e ganhador é: ", valor);
        return true;

    } else if(tabuleiro[0].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[8].innerHTML == valor) {
        console.log("Fechou diagonal 1, e ganhador é: ", valor);
        return true;

    } else if(tabuleiro[2].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[6].innerHTML == valor) {
        console.log("Fechou diagonal 2, e ganhador é: ", valor);
        return true;
    }
}

function valida_empates() {
    if(
        tabuleiro[0].innerHTML !== "" && //Linhas ce condição dos if
        tabuleiro[1].innerHTML !== "" && // Linhas ce condição dos if
        tabuleiro[2].innerHTML !== "" && //  Linhas ce condição dos if
        tabuleiro[3].innerHTML !== "" && //   Linhas ce condição dos if
        tabuleiro[4].innerHTML !== "" && //   Linhas ce condição dos if
        tabuleiro[5].innerHTML !== "" && //  Linhas ce condição dos if
        tabuleiro[6].innerHTML !== "" && // Linhas ce condição dos if
        tabuleiro[7].innerHTML !== "" && //Linhas ce condição dos if
        tabuleiro[8].innerHTML !== ""
    ){
        console.log("EMPATE");
        return true;

    } else{

        return false;
    }
}

function reniciar_jogo(){

    uvc = "";
    block_game = false;
    resultado.innerHTML = "";

    for(let index = 0; index < tabuleiro.length; index++){
        
        tabuleiro[index].innerHTML = "";
    }
}
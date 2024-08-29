const input = window.document.getElementById("input"); // Carrega Input da pagina

const ul = window.document.getElementById("ul"); // Carrega ul da pagina

var base_dados = window.localStorage.getItem("dados");

if(base_dados === null){

    window.localStorage.setItem("dados", "[]");
    base_dados = "[]";
}

var alunos = [];

function carregar_dados(){

    alunos = JSON.parse(base_dados);

    alunos.forEach(item =>{

        const li = window.document.createElement("li"); // Cria a li

        li.innerHTML = item; // carrega o valor digitado no input  na li

        ul.appendChild(li); //Aplica a "li" dentro da "ul;"
    });
}

carregar_dados();

function adicionar(){ // função que adiciona novos itens a minha lista

    if(input.value !== ""){

        const li = window.document.createElement("li"); // Cria a li

        li.innerHTML = input.value; // carrega o valor digitado no input  na li

        //Adiciona item na lista de alunos
        alunos.push(input.value)
        window.localStorage.setItem("dados", JSON.stringify(alunos));

        ul.appendChild(li); //Aplica a "li" dentro da "ul;"

        input.value = ""; // limpa o input

    } else {

        alert("O campo está vazio!");
    }
}
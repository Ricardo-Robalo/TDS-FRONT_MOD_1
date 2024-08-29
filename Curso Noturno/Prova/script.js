const Nome = document.getElementById("Nome");
const Email = document.getElementById("Email");
const Msg_C = document.getElementById("Msg_C");

function info(event) {
    Msg_C.innerHTML = "Muito obrigado(a), senhor(a) " + Nome.value + ". Acabamos de enviar um e-mail para: " + Email.value + ".";
    alert(Msg_C.innerHTML);
}

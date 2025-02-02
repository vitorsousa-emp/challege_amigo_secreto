//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let dadosAmigos = [];
let texto = document.querySelector("input")

alert("quando clicar em sortear amigo o jogo sera reiniciado")
function adicionarAmigo(){
    if (texto.value != "" && " ") {
        dadosAmigos.push(texto.value);
        let mostraLista = document.getElementById("nomeDosAmigos");
        mostraLista.innerHTML = `lista de amigos: ${dadosAmigos}`;
        console.log(dadosAmigos);
        let ulTexto = document.getElementById("listaAmigos")
        ulTexto.innerHTML = `adicionado agora: ${texto.value}`;
        limparCampo();
    }else{
        alert("coloque alguma nome na caixa")
    }
}  

function sortearAmigo() {
    if (dadosAmigos.length !=0) {
        let aleatorio =   parseInt(Math.random(dadosAmigos)*dadosAmigos.length)
        console.log(aleatorio)
        let resultadoSoteio = document.getElementById("resultado");
        resultadoSoteio.innerHTML = `o escolhido foi ${dadosAmigos[aleatorio]} `
        dadosAmigos = [];
        let mostraLista = document.getElementById("nomeDosAmigos");
        mostraLista.innerHTML = "";
    }else{
        alert("coloque algo na caixa")
    }
  
}


function limparCampo(params) {
    let texto =  document.querySelector("input")
    texto.value = "";
}
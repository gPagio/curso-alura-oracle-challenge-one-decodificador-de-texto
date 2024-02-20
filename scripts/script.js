function criptografar() {
    const mensagem = getTextoDigitado();
    const mensagemCriptografada = mensagem
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    exibirNaTela(mensagemCriptografada);
}

function descriptografar() {
    const mensagemCriptografada = getTextoDigitado();
    const mensagemDescriptografada = mensagemCriptografada
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    exibirNaTela(mensagemDescriptografada);
}

function getTextoDigitado(){
    return document.querySelector('.painel__esquerdo__interagivel__textarea').value;
}

function exibirNaTela(mensagem){
    if (!mensagem || mensagem.length === 0) {
        document.querySelector('.painel__direito__interagivel__texto').textContent = "Nenhum texto foi digitado";
    } else {
        document.querySelector('.painel__direito__interagivel__texto').textContent = mensagem;
    }
}
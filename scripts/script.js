function criptografar() {
    const mensagem = getTextoDigitado();
    try {
        exibirNaTela(window.btoa(mensagem).toString());
    } catch (error) {
        console.log(`Não foi possivel criptografar a mensagem ${mensagem}. Segue a Stack Trace`, error)
    }
}

function descriptografar() {
    const mensagem = getTextoDigitado();
    try {
        exibirNaTela(window.atob(mensagem).toString());
    } catch (error) {
        console.log(`A mensagem ${mensagem} não está corretamente codificada em base64: `, error);
    }
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
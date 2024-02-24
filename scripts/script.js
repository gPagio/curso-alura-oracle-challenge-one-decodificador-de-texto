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

function copiarParaAreaTransferencia() {
    try {
        var texto = getTextoExibido();
        console.log(texto);
        navigator.clipboard.writeText(texto);
    } catch (error) {
        console.log('Nenhum texto foi processado');
        alert('Nenhum texto foi processado');
        navigator.clipboard.writeText('');
    }
}

function getTextoDigitado(){
    return document.querySelector('.painel__esquerdo__interagivel__textarea').value;
}

function getTextoExibido(){
    return document.querySelector('.painel__direito__interagivel__processado__texto').textContent.trim();
}

function exibirNaTela(mensagem){
    if (!mensagem || mensagem.length === 0) {
        document.querySelector('.painel__direito').innerHTML = exibirPainelDireitoInicial();
    } else {
        document.querySelector('.painel__direito').innerHTML = exibirPainelDireitoTextoProcessado(mensagem);
    }
}

function exibirPainelDireitoInicial(){
    return `<div class="painel__direito__interagivel">
                <img class="painel__direito__interagivel__imagem" src="assets/High quality products 1 1.svg" alt="Imagem Nada Encontrado">
                <div class="painel__direito__interagivel__texto">
                    <div class="painel__direito__interagivel__texto__principal">
                        Nenhuma mensagem encontrada
                    </div>
                    <div class="painel__direito__interagivel__texto__secundario">
                        Digite um texto que você deseja criptografar ou descriptografar.
                    </div>
                </div>
            </div>`;
}

function exibirPainelDireitoTextoProcessado(mensagem){
    return `<div class="painel__direito__interagivel__processado">
                <div class="painel__direito__interagivel__processado__texto">
                    ${mensagem}
                </div>
            </div>`;
}
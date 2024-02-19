var mensagem = "U2FsdGVkX19YbkR4vaWg6FR6G/LN8y6VbtjRKOPaTbU=";
var chave = "curso-alura-oracle-challenge-one-decodificador-de-texto";

function criptografar(mensagem) {
    console.log(CryptoJS.AES.encrypt(mensagem, chave).toString());
}

function descriptografar(mensagem){
    console.log(CryptoJS.AES.decrypt(mensagem, chave).toString(CryptoJS.enc.Utf8));
}
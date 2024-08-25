let textarea = document.querySelector('textarea');
let botaoCriptografar = document.querySelector('.botao-criptografar');
let botaoDescriptografar = document.querySelector('.botao-descriptografar');
let botaoReset = document.querySelector('.botao-reset');
let botaoCopiar = document.querySelector('.botao-copiar');
let textoSaida = document.querySelector('.textoSaida');
let conteudoTexto = document.querySelector('.conteudo-texto');
let imagemInicial = document.querySelector('.imagem-inicial');


function criptografar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptografar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

textarea.addEventListener('input', () => {
    botaoDescriptografar.disabled = !textarea.value.trim().length;
});

function mostrarTexto(texto) {
    conteudoTexto.textContent = texto;
    textoSaida.style.display = 'block';
    imagemInicial.style.display = 'none';
    botaoCopiar.disabled = false;
}

botaoCriptografar.addEventListener('click', () => {
    mostrarTexto(criptografar(textarea.value));
});

botaoDescriptografar.addEventListener('click', () => {
    mostrarTexto(descriptografar(textarea.value));
});

botaoReset.addEventListener('click', () => {
    textarea.value = '';
    conteudoTexto.textContent = '';
    textoSaida.style.display = 'none';
    imagemInicial.style.display = 'block';
    botaoDescriptografar.disabled = true;
    botaoCopiar.disabled = true;
});

botaoCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(conteudoTexto.textContent)
        .then(() => alert('Texto copiado com sucesso!'))
        .catch(err => alert('Erro ao copiar o texto: ', err));
});

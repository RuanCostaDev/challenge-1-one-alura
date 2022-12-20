const formulario = document.querySelector('[data-type-input]');
const formularioSaida = document.querySelector('[data-type-output]');
const botaoCriptografa = document.querySelector('[data-button-criptografa]');
const botaoDescriptografa = document.querySelector('[data-button-descriptografa]');
const botaoCopia = document.querySelector('.button-copy');



const copiaTexto = async () => {
    var copytext = formularioSaida.innerHTML;
    try{
        await navigator.clipboard.writeText(copytext);
        alert('Content copied');
    } catch (err) {
        alert('Failed to copy: ', err);
    }
}

function criptografaTexto() {
    const texto = formulario.value;
    const textoCriptografado = texto.replaceAll('e', 'enter',)
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat')

    formularioSaida.parentElement.style.justifyContent = 'space-between';
    formularioSaida.parentElement.style.overflowY = 'auto';
    formularioSaida.style.textAlign = 'left';
    
    botaoCopia.hidden = false;
    
    formularioSaida.previousElementSibling.hidden = true;
    formularioSaida.nextElementSibling.hidden = true;

    formularioSaida.innerText = textoCriptografado;
}

function descriptografaTexto() {
    const texto = formulario.value;
    const textoCriptografado = texto.replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')

    formularioSaida.parentElement.style.justifyContent = 'space-between';
    formularioSaida.parentElement.style.overflowY = 'auto';
    formularioSaida.style.textAlign = 'left';

    botaoCopia.hidden = false;

    formularioSaida.previousElementSibling.hidden = true;
    formularioSaida.nextElementSibling.hidden = true;


    formularioSaida.innerText = textoCriptografado;
}

function verificaFormulário() {
    if(formulario.value == "") {
        botaoCopia.hidden = true;
        formularioSaida.previousElementSibling.hidden = false;
        formularioSaida.nextElementSibling.hidden = false;
        formularioSaida.innerText = 'Nenhuma mensagem encontrada';
        formularioSaida.style.textAlign = 'center';

    }
}


botaoCriptografa.addEventListener('click', criptografaTexto);
botaoDescriptografa.addEventListener('click', descriptografaTexto);
formulario.addEventListener('keyup', verificaFormulário);
botaoCopia.addEventListener('click', copiaTexto);



// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
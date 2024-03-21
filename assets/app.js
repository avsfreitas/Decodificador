let textoEntrada = document.getElementById("texto_entrada");
let textoSaida = document.getElementById("texto_saida");

function criptografar() {
    let texto = textoEntrada.value;
    let textoCriptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    textoSaida.innerHTML = textoCriptografado;

    mudarEstado();
}

function descriptografar() {
    let texto = textoEntrada.value;
    let textoDescriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    textoSaida.innerHTML = textoDescriptografado;

    mudarEstado();
}


function copiarTexto() {
    let textoCopiado = textoSaida.value;
    navigator.clipboard.writeText(textoCopiado).then(function() {
        alert("Texto copiado com sucesso!");
    }, function() {
        alert("Erro ao copiar texto.");
    });

}


function mudarEstado() {
    let display = document.getElementsByClassName("conteudo__saida__aposEntrada").style.display;

    if (display == "none") {
        document.querySelector("conteudo__saida__aposEntrada").style.display = 'flex';
    } else {
        document.querySelector("conteudo__saida__aposEntrada").style.display = 'none';
    }
    
}
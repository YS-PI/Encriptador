const encriptar = () => {
  const texto = document.querySelector("#input-texto").value;
  const textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector("#text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
};

const boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

const desencriptar = () => {
  const texto = document.querySelector("#input-texto").value;
  const textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.querySelector("#text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
};

const boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

const copiandoTexto = () => {
  const copyText = document.querySelector("#text-input-salida");
  copyText.select();
  document.execCommand("copy");

  alert("Mensaje copiado");
};

const boton3 = document.querySelector("#btn-copy");
boton3.onclick = copiandoTexto;

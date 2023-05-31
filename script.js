const textArea = document.querySelector(".input-text");
const mensaje = document.querySelector(".output-text");

const pattern = /[A-ZÁÉÍÓÚÜÑáéíóúüñ0123456789\^$.!°"%&¿¡#*+?=!:@>´¨`^;:|\\/()\[\]{}]/;

function btnEncrypt() {
  const textEncrypted = encrypt(textArea.value);
  if (pattern.test(textEncrypted) == true) {
    swal("Atención!", "Solo letras minúsculas y sin caracteres especiales!", "error");
    return;
  }
  if (textEncrypted != "") {
    document.getElementById("output-initial").classList.add("disable");
    document.getElementById("output-result").classList.remove("disable");
  } else {
    swal("Atención!", "Ingrese el texto a encriptar!", "error");
  }
  mensaje.value = textEncrypted;
  textArea.value = "";
}

function btnDecrypt() {
  const textDecrypted = decrypt(textArea.value);
  if (pattern.test(textDecrypted) == true) {
    swal("Atención!", "Solo letras minúsculas y sin caracteres especiales!", "error");
    return;
  }
  if (textDecrypted != "") {
    document.getElementById("output-initial").classList.add("disable");
    document.getElementById("output-result").classList.remove("disable");
  } else {
    swal("Atención!", "Ingrese el texto a desencriptar!", "error");
  }
  mensaje.value = textDecrypted;
  textArea.value = "";
}

function encrypt(encryptedText) {
  let keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  encryptedText = encryptedText;
  for (let i = 0; i < keys.length; i++) {
    if (encryptedText.includes(keys[i][0])) {
      encryptedText = encryptedText.replaceAll(keys[i][0], keys[i][1]);
    }
  }
  return encryptedText;
}

function decrypt(decryptedText) {
  let keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  decryptedText = decryptedText;
  for (let i = 0; i < keys.length; i++) {
    if (decryptedText.includes(keys[i][1])) {
      decryptedText = decryptedText.replaceAll(keys[i][1], keys[i][0]);
    }
  }
  return decryptedText;
}

document.getElementById("copy").onclick = function () {
  let text = document.getElementById("content").value;
  navigator.clipboard.writeText(text);
  swal("Texto copiado", "Excelente!", "success");
  document.getElementById("output-initial").classList.remove("disable");
  document.getElementById("output-result").classList.add("disable");
  mensaje.value = "";
};

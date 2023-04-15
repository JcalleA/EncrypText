document.getElementById('entry').addEventListener('input',actualizar);

function actualizar() {
    document.getElementById('imagen1').style.display = "none";
    document.getElementById('div4').style.display = "block";
    document.getElementById('bocopy').style.display = "block";
    var texto = document.getElementById('entry').value;
    var texto1 = ''
    for (var i = 0; i < texto.length; i++) {
        document.getElementById('parrafo').style.animationIterationCount=texto.length
        if (texto[i] == 'a')
            texto1 = texto1 + 'ai'
        else if (texto[i] == 'e')
            texto1 =texto1 + 'enter'
        else if (texto[i] == 'i')
            texto1 = texto1 + 'imes'
        else if (texto[i] == 'o')
            texto1 = texto1 + 'ober'
        else if (texto[i] == 'u')
            texto1 = texto1 +'ufat'
        else
            texto1 = texto1 + texto[i]

    }
    
    document.getElementById('parrafo').textContent = texto1;
    
    
}

function updateClipboard() {
    document.getElementById('entry').value = '';
    var textCopy = document.getElementById('parrafo').innerText;
    navigator.clipboard.writeText(textCopy).then(() => {
        alert('Texto Copiado Con Exito')
        /* clipboard successfully set */
    }, () => {
        alert('Error Al Copiar')
        /* clipboard write failed */
    });
}

function desencriptar() {
    document.getElementById('imagen1').style.display = "none";
    var texto = document.getElementById('entry').value;
    var texto1 = texto.replaceAll('ai', 'a')
    var texto2 = texto1.replaceAll('enter', 'e')
    var texto3 = texto2.replaceAll('imes', 'i')
    var texto4 = texto3.replaceAll('ober', 'o')
    var texto5 = texto4.replaceAll('ufat', 'u')
    document.getElementById('parrafo').textContent = texto5

}

function encriptar(){
    document.getElementById('imagen1').style.display = "none";
    var texto = document.getElementById('entry').value;
    var texto1= ""
    for (var i = 0; i < texto.length; i++) {
      if(texto[i]=='a')
        texto1+='ai'
      else if(texto[i]=='e')
        texto1+='enter'
      else if(texto[i]=='i')
        texto+='imes'
      else if(texto[i]=='o')
        texto1+='ober'
      else if(texto[i]=='u')
        texto1+='ufat'
      else
        texto1+=texto[i]
  
}
    document.getElementById('parrafo').textContent=texto1
    
}

function updateClipboard() {
  var textCopy=document.getElementById('parrafo').innerText;
  navigator.clipboard.writeText(textCopy).then(() => {
    alert('copiado')
    /* clipboard successfully set */
  }, () => {
    alert('error al copiar')
    /* clipboard write failed */
  });
}

function desencriptar(){
    document.getElementById('imagen1').style.display = "none";
    var texto = document.getElementById('entry').value;
    var texto1=texto.replaceAll('ai','a')
    var texto2=texto1.replaceAll('enter','e')
    var texto3=texto2.replaceAll('imes','i')
    var texto4=texto3.replaceAll('ober','o')
    var texto5=texto4.replaceAll('ufat','u')
    document.getElementById('parrafo').textContent=texto5
    
}
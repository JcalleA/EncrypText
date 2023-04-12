
function encriptar(){
    document.getElementById('imagen1').style.display = "none";
    var texto = document.getElementById('entry').value;
    var texto1=texto.replaceAll('a','ai')
    var texto2=texto1.replaceAll('e','enter')
    var texto3=texto2.replaceAll('i','imes')
    var texto4=texto3.replaceAll('o','ober')
    var texto5=texto4.replaceAll('u','ufat')
    texto5.toLowerCase()
    document.getElementById('parrafo').textContent=texto5
    
}
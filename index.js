
function encriptar(){
    document.getElementById('imagen1').style.display = "none";
    var texto = document.getElementById('entry').value;
    var texto1=texto.replace('a','ai')
    var texto2=texto1.replace('e','enter')
    var texto3=texto2.replace('i','imes')
    var texto4=texto3.replace('o','ober')
    var texto5=texto4.replace('u','ufat')
    console.log(texto5);
    document.getElementById('parrafo').textContent=texto5
}
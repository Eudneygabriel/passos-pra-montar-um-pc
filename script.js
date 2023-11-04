document.getElementById('mostrarTexto').addEventListener('click', function() {
    var textoOculto = document.getElementById('textoOculto');
    if (textoOculto.style.display === 'none') {
        textoOculto.style.display = 'block';
    } else {
        textoOculto.style.display = 'none';
    }
});

var body = document.body;
var cores = ['blue', 'lightblue', 'white']; 
var corAtual = 0; 

document.getElementById('mudarCor').addEventListener('click', function() {
    corAtual = (corAtual + 1) % cores.length;
    body.style.backgroundColor = cores[corAtual];
});
document.getElementById('mostrarGif').addEventListener('click', function() {
    var gifAnimado = document.getElementById('gifAnimado');
    if (gifAnimado.style.display === 'none') {
        gifAnimado.style.display = 'block';
    } else {
        gifAnimado.style.display = 'none';
    }
});




// Selecionando os elementos
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

// Função para avançar
document.querySelectorAll('.next').forEach(function(btn) {
  btn.addEventListener('click', function() {
    if (animating) return false;
    animating = true;

    current_fs = this.parentElement;
    next_fs = this.parentElement.nextElementSibling;

    document.querySelectorAll('#progressbar li')[Array.from(document.querySelectorAll('fieldset')).indexOf(next_fs)].classList.add('active');

    // Mostrar o próximo fieldset
    next_fs.style.display = 'block';
    // Esconder o fieldset atual com estilo
    var animationInterval = setInterval(function() {
      var currentOpacity = parseFloat(window.getComputedStyle(current_fs).opacity);
      if (currentOpacity <= 0) {
        clearInterval(animationInterval);
        current_fs.style.display = 'none';
        animating = false;
      } else {
        // Reduzir a opacidade do current_fs
        current_fs.style.opacity = currentOpacity - 0.1;
      }
    }, 80);
  });
});

// Função para voltar
document.querySelectorAll('.previous').forEach(function(btn) {
  btn.addEventListener('click', function() {
    if (animating) return false;
    animating = true;

    current_fs = this.parentElement;
    previous_fs = this.parentElement.previousElementSibling;

    // Desativar o passo atual na barra de progresso
    document.querySelectorAll('#progressbar li')[Array.from(document.querySelectorAll('fieldset')).indexOf(current_fs)].classList.remove('active');

    // Mostrar o fieldset anterior
    previous_fs.style.display = 'block';
    // Esconder o fieldset atual com estilo
    var animationInterval = setInterval(function() {
      var currentOpacity = parseFloat(window.getComputedStyle(current_fs).opacity);
      if (currentOpacity <= 0) {
        clearInterval(animationInterval);
        current_fs.style.display = 'none';
        animating = false;
      } else {
        // Reduzir a opacidade do current_fs
        current_fs.style.opacity = currentOpacity - 0.1;
      }
    }, 80);
  });
});

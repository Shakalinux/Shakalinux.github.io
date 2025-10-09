document.querySelector('.btn-cta').addEventListener('click', function(event) {
  event.preventDefault(); 
  const targetId = this.getAttribute('href').substring(1); 
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});


var video = document.getElementById("meu-video");
video.volume = 0.1;


window.onload = function () {
    var carrosseis = document.querySelectorAll('.project-item');
    var indices = [];

    for (var i = 0; i < carrosseis.length; i++) {
        var imagens = carrosseis[i].getElementsByTagName('img');
      
        for (var j = 0; j < imagens.length; j++) {
            imagens[j].style.display = 'none';
        }

        if (imagens.length > 0) {
            imagens[0].style.display = 'block';
        }
        
        indices.push(0);
    }

    setInterval(function () {
        for (var i = 0; i < carrosseis.length; i++) {
            var imagens = carrosseis[i].getElementsByTagName('img');
            if (imagens.length === 0) continue;

            imagens[indices[i]].style.display = 'none';

            indices[i] = (indices[i] + 1) % imagens.length;

            imagens[indices[i]].style.display = 'block';
        }
    }, 3000);
};

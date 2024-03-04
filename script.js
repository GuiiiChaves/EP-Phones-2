document.addEventListener("DOMContentLoaded", function() {
    // Define a função para alterar a imagem com base no tipo de dispositivo
    function changeImageBasedOnDevice() {
      // Detecta se o usuário está em um dispositivo móvel
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Altera a imagem com base no tipo de dispositivo
      if (isMobile) {
        document.getElementById("dynamicImage").src = "https://www.iplace.com.br/file/general/iplaceb2c-home-cartaohoje-23022024-mob-1.jpg"; // Imagem para dispositivos móveis
      } else {
        document.getElementById("dynamicImage").src = "https://images.wallpapersden.com/image/download/4k-a-different-world_bWVqaG6UmZqaraWkpJRmbmdlrWZlbWU.jpg"; // Imagem para desktops
      }
    }
  
    // Chama a função para alterar a imagem com base no tipo de dispositivo
    changeImageBasedOnDevice();
  
    // Define uma lista de URLs das imagens para desktops
    const desktopImageUrls = [
        "https://images.wallpapersden.com/image/download/4k-a-different-world_bWVqaG6UmZqaraWkpJRmbmdlrWZlbWU.jpg",
        "https://images.wallpapersden.com/image/download/firewatch-4k-uhd_bWVuZ2qUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        "https://s1.1zoom.me/b5050/194/Coast_Little_girls_Clouds_532086_1920x1080.jpg"
        // Adicione mais URLs conforme necessário
    ];
  
    // Define uma lista de URLs das imagens para dispositivos móveis
    const mobileImageUrls = [
        "https://www.iplace.com.br/file/general/iplaceb2c-home-cartaohoje-23022024-mob-1.jpg",
        "https://www.iplace.com.br/file/general/iplaceb2c-home-cartaohoje-27022024-mob-2.jpg",
        "https://www.iplace.com.br/file/general/iplaceb2c-home-cartaohoje-23022024-mob-4-ajuste.jpg"
        // Adicione mais URLs conforme necessário
    ];
  
    const dynamicImage = document.getElementById("dynamicImage");
    let currentIndex = 0;
  
    // Define a função para trocar a imagem
    function changeImage() {
        // Verifica se é um desktop ou dispositivo móvel
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const imageUrls = isMobile ? mobileImageUrls : desktopImageUrls;
      
        currentIndex = (currentIndex + 1) % imageUrls.length;
        dynamicImage.src = imageUrls[currentIndex];
    }
  
    // Chama a função `changeImage` a cada 5 segundos
    setInterval(changeImage, 5000);
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault(); // Evita que o link redirecione

      // Obtém o ID do destino do link
      const targetId = this.getAttribute('href').substring(1);

      // Rola para o elemento com o ID correspondente
      document.getElementById(targetId).scrollIntoView({ 
          behavior: 'smooth' 
      });
  });
});

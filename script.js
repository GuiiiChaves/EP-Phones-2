document.addEventListener("DOMContentLoaded", function() {
    // Define a função para alterar a imagem com base no tipo de dispositivo
    function changeImageBasedOnDevice() {
        // Detecta se o usuário está em um dispositivo móvel
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
        // Define o URL da imagem com base no tipo de dispositivo
        const imageUrl = isMobile ? "img/1 ARTE SITE EP PHONES.png" : "img/bannercel.png";
  
        const dynamicImage = document.getElementById("dynamicImage");
  
        // Define o URL da imagem
        dynamicImage.src = imageUrl;
    }
  
    // Chama a função para alterar a imagem com base no tipo de dispositivo
    changeImageBasedOnDevice();
  
    // Define uma lista de URLs das imagens para desktops
    const desktopImageUrls = [
        "img/1 ARTE SITE EP PHONES_.png",
        "img/ARTE SITE EP PHONES 1 (1).png",
        "img/ARTE SITE EP PHONES 2 n.png"
        // Adicione mais URLs conforme necessário
    ];
  
    // Define uma lista de URLs das imagens para mobile
    const mobileImageUrls = [
        "img/bannercel.png",
        "img/1 ARTE SITE EP PHONES.png",
        "https://www.iplace.com.br/file/general/iplaceb2c-home-cartaohoje-23022024-mob-4-ajuste.jpg"
        // Adicione mais URLs conforme necessário
    ];
  
    const dynamicImage = document.getElementById("dynamicImage");
    let currentIndex = 0;
  
    // função para trocar a imagem
    function changeImage() {
        // Verifica se é um desktop ou dispositivo móvel
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const imageUrls = isMobile ? mobileImageUrls : desktopImageUrls;
  
        currentIndex = (currentIndex + 1) % imageUrls.length;
        dynamicImage.src = imageUrls[currentIndex];
    }
  
    // Trocar imagem a cada 5 segundos
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


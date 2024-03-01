document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const dropdownMenu = item.nextElementSibling; // Move isso aqui para fora do loop para otimização

        item.addEventListener('mouseenter', function() {
            dropdownMenu.style.display = 'block';
        });

        // Adicione um evento ao dropdown menu para manter a exibição quando o mouse estiver nele
        dropdownMenu.addEventListener('mouseenter', function() {
            dropdownMenu.style.display = 'block';
        });

        // Adicione um evento ao dropdown menu para ocultá-lo quando o mouse sair
        dropdownMenu.addEventListener('mouseleave', function() {
            dropdownMenu.style.display = 'none';
        });

        // Adicione um evento ao item de menu para ocultar o dropdown menu quando o mouse sair
        item.addEventListener('mouseleave', function() {
            dropdownMenu.style.display = 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Define a função para alterar a imagem com base no tipo de dispositivo
    function changeImageBasedOnDevice() {
      // Detecta se o usuário está em um dispositivo móvel
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Altera a imagem com base no tipo de dispositivo
      if (isMobile) {
        document.getElementById("dynamicImage").src = "https://www.iplace.com.br/file/general/iplaceb2c-home-cartaohoje-23022024-mob-1.jpg"; // Imagem para dispositivos móveis
      } else {
        document.getElementById("dynamicImage").src = "https://cdn.wallpapersafari.com/89/77/zVTcvh.jpg"; // Imagem para desktops
      }
    }
  
    // Chama a função para alterar a imagem com base no tipo de dispositivo
    changeImageBasedOnDevice();
  
    // Define uma lista de URLs das imagens para desktops
    const desktopImageUrls = [
        "https://cdn.wallpapersafari.com/89/77/zVTcvh.jpg",
        "https://pxwall.com/wp-content/uploads/2021/06/1920x1080-4k-Wallpaper.jpg",
        "imagem3.jpg"
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

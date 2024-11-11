document.addEventListener("DOMContentLoaded"), function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.book-image');
    const totalImages = images.length;
    }
    
    // Função para exibir a próxima imagem
    function nextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add('active');
    }
    
    // Função para exibir a imagem anterior
    function prevImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        images[currentIndex].classList.add('active');
    }

    
    
    document.querySelector('.next').addEventListener('click', nextImage);
    document.querySelector('.prev').addEventListener('click', prevImage);
    
    
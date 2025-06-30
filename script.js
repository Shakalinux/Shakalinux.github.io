document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.project-image-carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        let currentImageIndex = 0;

        
        images.forEach((img, index) => {
            if (index !== 0) {
                img.style.display = 'none';
                img.classList.remove('active');
            } else {
                img.style.display = 'block';
                img.classList.add('active');
            }
        });

        const showNextImage = () => {
            images[currentImageIndex].classList.remove('active'); 
            images[currentImageIndex].style.display = 'none'; 

            currentImageIndex = (currentImageIndex + 1) % images.length; 

            images[currentImageIndex].style.display = 'block';
            images[currentImageIndex].classList.add('active'); 
        };
        setInterval(showNextImage, 3000); 
    });
});
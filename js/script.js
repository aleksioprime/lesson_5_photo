const imgs = document.querySelectorAll('.images img');
const modal = document.querySelector('.modal');
const activeImage = document.querySelector('#active-image');
const overlay = document.querySelector('.overlay');
const closeIcon = document.querySelector('#close');


imgs.forEach(img => img.addEventListener('click', displayImage)); 

function displayImage(e) { 
    // console.log(e.target);
    activeImage.src = e.target.src;
    // console.log(modal);
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

closeIcon.addEventListener('click', closeImage);

function closeImage() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

overlay.addEventListener('click', closeImage );
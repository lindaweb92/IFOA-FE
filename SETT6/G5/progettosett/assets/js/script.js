const video = document.querySelector('video');
const muteIcon = document.querySelector('.fa-volume-mute');
const muteButton = muteIcon.parentNode;
console.log(video, muteButton);

muteButton.addEventListener('click', () => {
    video.muted = false;
})


const images = document.querySelectorAll('#categories img')
console.log(images);

images.forEach((image) => {
    image.addEventListener('mouseenter',() => {
        image.style.transform = 'scale(1.05)';
    })
    image.addEventListener('mouseleave',() => {
        image.style.transform = 'scale(1)';
    })
});


const button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = '<i class="fas fa-chevron-up"></i>';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.display = 'none';

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

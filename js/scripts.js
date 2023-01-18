const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const slidesContainer = document.querySelector('.slides')
const thumbnailsContainer = document.querySelector('.thumbnails')
let currentSlide = 0;

images.forEach((singleImage) =>{
    const newSlide = document.createElement('div')
    newSlide.classList.add('slide')
    newSlide.innerHTML = `
                    <img src="${singleImage.image}" alt="${singleImage.title}">
                    <div class="texts">
                        <h3>    
                        ${singleImage.title}    
                        </h3>
                        <p>
                        ${singleImage.text}
                        </p>
                    </div>`;

                    slidesContainer.append(newSlide);

    const newThumbnail = document.createElement('div');
    newThumbnail.classList.add('thumbnail')
    newThumbnail.style.height = (100 / images.length) + '%'
    newThumbnail.innerHTML = `
                    <img src="${singleImage.image}" alt="${singleImage.title}">
                    `;

                    thumbnailsContainer.append(newThumbnail);
}

);

const allSlide = document.querySelectorAll('.slide')
allSlide[currentSlide].classList.add('active');

const allThumbnail = document.querySelectorAll('.thumbnail')
allThumbnail[currentSlide].classList.add('active');






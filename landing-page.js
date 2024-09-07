const adjectif = document.querySelector('.adj');
const contactBtn = document.querySelector('.contact-btn');
const contact = document.querySelector('.contact');
const closeContact = document.querySelector('.bi-x-lg');
const listeClub = document.querySelectorAll('.club');
const audio = document.querySelector(".bi-play-circle");
const video = document.querySelector("video");
const adjectifs = [
    "Talented",
    "Creative",
    "Fast",
    "Technical",
    "Charismatic",
    "Spectacular",
    "Agile",
    "Daring",
    "Brilliant",
    "Dynamic"
]


setInterval(() => {
    adjectif.textContent = adjectifs[Math.floor(Math.random() * adjectifs.length)];
}, 4000);

contactBtn.addEventListener('click', () => {
    contact.classList.toggle('contact-active');
});
closeContact.addEventListener('click', () => {
    contact.classList.remove('contact-active');
});

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', function () {
        listeClub.forEach((elt) => {
            const windowHeight = window.innerHeight; // Hauteur intérieure de la fenêtre
            const clubeTob = elt.getBoundingClientRect().top; // Position du haut de l'élément par rapport au haut de la fenêtre
            const clubBottom = elt.getBoundingClientRect().bottom;
            if (clubeTob <= windowHeight - 750 && clubBottom >= 0) {
                elt.classList.add('anim-club');
            } else {
                elt.classList.remove('anim-club');
            }
        })

    });
})

audio.addEventListener('click',() => {
   if(video.muted){
       video.muted = false;
   } else{
       video.muted = true;
   }
})

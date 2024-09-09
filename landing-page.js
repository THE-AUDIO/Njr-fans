const adjectif = document.querySelector('.adj');
const contactBtn = document.querySelector('.contact-btn');
const contact = document.querySelector('.contact');
const closeContact = document.querySelector('.closed');
const listeClub = document.querySelectorAll('.club');
const audio = document.querySelector(".bi-play-circle");
const video = document.querySelector("video");
const viewMenue = document.querySelector('.bi-list');
const hiddenMenu = document.querySelector('.bi-x-lg');
const menue = document.querySelector('.menue-link');
const animElt = document.querySelectorAll('.anim-translate');
const animEltRight = document.querySelectorAll('.anim-translate-right');

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

// event to show and hidden a menu
viewMenue.addEventListener('click',()=>{
    menue.classList.add("menue-link-active");
    hiddenMenu.classList.remove('opac');

})

hiddenMenu.addEventListener('click',()=>{
    menue.classList.remove('menue-link-active');
    hiddenMenu.classList.add('opac');

})

const link = menue.childNodes;
link.forEach((elt)=>{
    elt.addEventListener('click',()=>{
        menue.classList.remove('menue-link-active');
    })
})
// display  random carater of neymar 
setInterval(() => {
    adjectif.textContent = adjectifs[Math.floor(Math.random() * adjectifs.length)];
}, 4000);

// display my contact 
contactBtn.addEventListener('click', () => {
    contact.classList.toggle('contact-active');
    
});
closeContact.addEventListener('click', () => {
    contact.classList.remove('contact-active');
});

// add scroll events to the neymar club

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', function () {
        listeClub.forEach((elt) => {
            const windowHeight = window.innerHeight; // Hauteur intérieure de la fenêtre
            const clubeTob = elt.getBoundingClientRect().top; // Position du haut de l'élément par rapport au haut de la fenêtre
            // const clubBottom = elt.getBoundingClientRect().bottom;
            if (clubeTob <= windowHeight - 200) {
                elt.classList.add('anim-club');
            } else {
                elt.classList.remove('anim-club');
            }
        })

    });
})
// play a audio
audio.addEventListener('click',() => {
   if(video.muted){
       video.muted = false;
   } else{
       video.muted = true;
   }
})

document.addEventListener('scroll', function () {
    animElt.forEach((elt) => {
        const windowHeight = window.innerHeight; // Hauteur intérieure de la fenêtre
        const eltTop = elt.getBoundingClientRect().top; // Position du haut de l'élément par rapport au haut de la fenêtre
        // const clubBottom = elt.getBoundingClientRect().bottom;
        if (eltTop <= windowHeight - 200) {
            elt.classList.add('anim-translate-active');
        } else {
            elt.classList.remove('anim-translate-active');
        }
    })

});

document.addEventListener('scroll', function () {
    animEltRight.forEach((elt) => {
        const windowHeight = window.innerHeight; // Hauteur intérieure de la fenêtre
        const eltTop = elt.getBoundingClientRect().top; // Position du haut de l'élément par rapport au haut de la fenêtre
        // const clubBottom = elt.getBoundingClientRect().bottom;
        if (eltTop <= windowHeight - 200) {
            elt.classList.add('anim-translate-right-active');
        } else {
            elt.classList.remove('anim-translate-right-active');
        }
    })

});
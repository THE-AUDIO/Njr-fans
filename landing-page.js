const adjectif = document.querySelector('.adj');
const contactBtn = document.querySelector('.contact-btn');
const contact = document.querySelector('.contact');
const closeContact = document.querySelector('.bi-x-lg');
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
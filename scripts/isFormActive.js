const showContactForm = document.querySelector('.contact-us-btn');
const contactForm = document.querySelector('.contact-form');

showContactForm.addEventListener('click',()=>{
    contactForm.classList.remove('hidden');
    document.querySelector('body').style.overflow='hidden';
    
});

const closeContactForm = document.querySelector('#close-form');

closeContactForm.addEventListener('click',()=>{
    contactForm.classList.add('hidden');
    document.querySelector('body').style.overflow='auto';
});
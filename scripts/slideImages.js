const rings = document.querySelectorAll('.img-indicators .ring');
const indicators = document.querySelectorAll('.img-indicators .ring .indicator');
const sec2ImgesContainer = document.querySelector('.sec2-images');

rings.forEach((ring,i)=>{
    ring.addEventListener('click',()=>{
        sec2ImgesContainer.style.transform = `translateX(-${i*100}%)`;
        rings.forEach(ring=>ring.classList.remove('ring-active'));
        indicators.forEach(ring=>ring.classList.remove('active'));
        ring.classList.add('ring-active');
        indicators[i].classList.add('active');
    });
});
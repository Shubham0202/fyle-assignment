const images = document.querySelectorAll('.img-feature');
const innerInfo = document.querySelectorAll('.img-feature .innerInfo');

innerInfo.forEach((info)=>{
    info.style.transform= 'translateY(800px)';
})
images.forEach((img, i) => {
    img.addEventListener('mouseenter', () => {
        innerInfo[i].style.transform= 'translateY(0)';
    });
    img.addEventListener('mouseleave', () => {
        innerInfo[i].style.transform= 'translateY(800px)';
    });
    });
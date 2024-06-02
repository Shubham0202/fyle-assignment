const projectImages = document.querySelector('.project-img img');
const selectProject = document.querySelectorAll('.project-item');

selectProject.forEach((project,i)=>{
    project.addEventListener('click',()=>{
        if(i+1 ==1)
        projectImages.setAttribute('src',`assets/projects/${i+1}.jpeg`);
        else if(i+1 ==2)
        projectImages.setAttribute('src',`assets/projects/${i+1}.png`);
        else if(i+1 ==3)
        projectImages.setAttribute('src',`assets/projects/${i+1}.jpeg`);
        selectProject.forEach(pj=>pj.classList.remove('active-project'));
        project.classList.add('active-project');
    });
});

const homeContainer = document.getElementById('home');
const aboutMeContainer = document.getElementById('aboutMe');
const skillsContainer = document.getElementById('skills');
const myProjectsContainer = document.getElementById('myProjects');
const contactContainer = document.getElementById('contact');

mainContainers = [homeContainer, aboutMeContainer, skillsContainer, myProjectsContainer, contactContainer]

const menuButtons = [...document.querySelectorAll('div.navigation nav ul li')]



menuButtons.forEach(function(button, index){
    button.addEventListener('click', function() {
        console.log(mainContainers[index]);

        mainContainers.forEach(function(container) {
            container.style.display='none'
        })

        mainContainers[index].style.display='flex'
    })
})
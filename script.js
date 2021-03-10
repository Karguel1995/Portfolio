const homeContainer = document.getElementById('home');
const aboutMeContainer = document.getElementById('aboutMe');
const skillsContainer = document.getElementById('skills');
const myProjectsContainer = document.getElementById('myProjects');
const contactContainer = document.getElementById('contact');

mainContainers = [homeContainer, aboutMeContainer, skillsContainer, myProjectsContainer, contactContainer]

const menuButtons = [...document.querySelectorAll('div.navigation nav ul li')]



menuButtons.forEach(function(button, index){
    button.addEventListener('click', function() {
        // console.log(mainContainers[index]);

        mainContainers.forEach(function(container) {
            container.style.display='none'
        })

        mainContainers[index].style.display='flex'
    })
})


const interestsList = [...document.querySelectorAll("ul.interests li")];
const photosInterestsList = [...document.querySelectorAll(".about-me .pics-container img")];

interestsList.forEach(function(verse, index){

    verse.addEventListener('mouseover', function(){

        photosInterestsList.forEach(function(photo, index){
            photo.style.display = 'none'
        })

        photosInterestsList[index].style.display = 'block'

    })

})

console.log(interestsList)
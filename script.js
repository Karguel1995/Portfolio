const homeContainer = document.getElementById('home');
const aboutMeContainer = document.getElementById('aboutMe');
const skillsContainer = document.getElementById('skills');
const myProjectsContainer = document.getElementById('myProjects');
const contactContainer = document.getElementById('contact');

const h1SecondHeader = document.querySelector(".second-header h1")

mainContainers = [homeContainer, aboutMeContainer, skillsContainer, myProjectsContainer, contactContainer]

const menuButtons = [...document.querySelectorAll('div.navigation nav ul li')]



menuButtons.forEach(function(button, index){
    button.addEventListener('click', function() {

        if (index == 0){
            h1SecondHeader.textContent = ""
        }else if(index == 1) {
            h1SecondHeader.textContent = "How I spend my free time"
        }else if(index == 2) {
            h1SecondHeader.textContent = "Main technologies, and languages I use"
        }else if(index == 3) {
            h1SecondHeader.textContent = "Projects in which I used my knowledge"
        }else if(index == 4) {
            h1SecondHeader.textContent = "Let's contact me!"
        }

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
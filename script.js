const homeContainer = document.getElementById('home');
const aboutMeContainer = document.getElementById('aboutMe');
const skillsContainer = document.getElementById('skills');
const myProjectsContainer = document.getElementById('myProjects');
const contactContainer = document.getElementById('contact');

const h1SecondHeader = document.querySelector(".second-header h1")

mainContainers = [homeContainer, aboutMeContainer, skillsContainer, myProjectsContainer, contactContainer]

const menuButtons = [...document.querySelectorAll('div.navigation ul li')]

const burgerBarOpen = document.querySelector('.navigation .hamburger i.fa-bars')

const burgerBarClose = document.querySelector('.navigation .hamburger i.fa-times ')

const spreadedNavigation = document.querySelector('.navigation ul')

// Footer

const footer = document.querySelector("div.footer")

// mainContainers.forEach(function(circle, index) {
//     const navCircle = document.createElement('div')
//     navCircle.classList.add('navCircle')
//     console.log(navCircle)
//     footer.appendChild(navCircle)
// });

//

// Navigation for Mobiles 

const handleBurgerClick = () => {
    burgerBarOpen.classList.toggle('active')
    burgerBarClose.classList.toggle('active')
    spreadedNavigation.classList.toggle('showBar');
}

burgerBarOpen.addEventListener('click', handleBurgerClick)
burgerBarClose.addEventListener('click', handleBurgerClick)

//


menuButtons.forEach(function(button, index){
    button.addEventListener('click', function() {
        
        if (index === 0){
            h1SecondHeader.textContent = ""
        }else if(index === 1) {
            h1SecondHeader.textContent = "How I spend my free time"
        }else if(index === 2) {
            h1SecondHeader.textContent = "Main technologies, and languages I use"
        }else if(index === 3) {
            h1SecondHeader.textContent = "Projects in which I used my knowledge"
        }else if(index === 4) {
            h1SecondHeader.textContent = "Let's get in touch!"
        }

        mainContainers.forEach(function(container) {
            container.style.display='none'
        })

        mainContainers[index].style.display='flex'
        if (spreadedNavigation.classList == 'showBar'){
        handleBurgerClick()
        }
    })
})





const interestsList = [...document.querySelectorAll("ul.interests li")];
const photosInterestsList = [...document.querySelectorAll(".about-me .pics-container img")];

interestsList.forEach(function(verse, index){
    verse.addEventListener('mouseover', function(){
        photosInterestsList.forEach(function(photo){
            photo.style.display = 'none'
        })
        photosInterestsList[index].style.display = 'block'
    })
})


const projectsList = [...document.querySelectorAll("ul.projects li")];
const photosProjectsList = [...document.querySelectorAll(".my-projects .pics-container .pic")];

projectsList.forEach(function(project, index){
    project.addEventListener('mouseover', function(){
        photosProjectsList.forEach(function(photo){
            photo.style.display = 'none'
        })
        photosProjectsList[index].style.display = 'block'
    })
})
/*Fixing sticked top menu, hiding the top of background image*/

const stickedNavMenu = document.querySelector(".sticked-navigation-menu")
const navMenuBackground = document.querySelector(".nav-menu-background")

navMenuBackground.style.height = `${stickedNavMenu.scrollHeight}px`

/*Top navigation menu for mobile phone screens opening closing*/

const closingButton = document.querySelector(".menu-close-button")
const mobileViewMenu = document.querySelector(".mobile-view-nav")
const mobileViewMenuBackground = document.querySelector(".mobile-view-nav-background")
const mobileViewMenuOpeningButton = document.querySelector(".open-mobile-view-menu")
const navMenuBackgroundDelay = 500

mobileViewMenuOpeningButton.addEventListener("click", mobileViewMenuOpen)
closingButton.addEventListener("click", mobileViewMenuClose)

function mobileViewMenuOpen(){
    mobileViewMenuBackground.style.display = "block"
    setTimeout(()=>mobileViewMenuBackground.classList.remove("mobile-view-nav-background-hide"), navMenuBackgroundDelay)
    mobileViewMenu.classList.remove("mobile-view-nav-hide")
}

function mobileViewMenuClose(){
    mobileViewMenu.classList.add("mobile-view-nav-hide")
    mobileViewMenuBackground.classList.add("mobile-view-nav-background-hide")
    setTimeout(()=>mobileViewMenuBackground.style.display = "none", navMenuBackgroundDelay)
}

/* Frequently asked questions opening and closing by clicking on a question */

const dropDownAnswers = document.querySelectorAll(".open-close-on-click")
const answers = document.querySelectorAll(".dropdown-answers-list-answer")

function hideAnswer(elem){
    elem.classList.add("hidden")
}

function showAnswer(elem){
    elem.classList.toggle("hidden")
}

function changeStateOfAnswer(e){
    const currentAnswer = e.target.nextElementSibling
    answers.forEach(answer=>{answer!=currentAnswer?hideAnswer(answer):""})
    showAnswer(currentAnswer)
}

dropDownAnswers.forEach(el => {
        el.addEventListener("click", e=>changeStateOfAnswer(e))
    }
);

/*Slider with Parthers Logos animation*/

const clickableDots = document.querySelectorAll(".dot")
const sliderItems = document.querySelectorAll(".slider-content")
const leftArrow = document.querySelector(".arrow-left")
const rightArrow = document.querySelector(".arrow-right")
const sliderAnimationDelay=5000;
let currentSliderIndex = 0

clickableDots.forEach((dot,index) =>{dot.addEventListener("click", ()=>{
    hideSliderItems()
    sliderItems[index].style.display="flex"
    sliderItems[index].classList.remove("hidden")
})});

leftArrow.addEventListener("click", ()=>{
    const activeSlide = [...sliderItems].find(item=>item.style.display=="flex")
    hideSliderItems()
    activeSlide==sliderItems[0]?sliderItems[sliderItems.length-1].style.display="flex":activeSlide.previousElementSibling.style.display="flex"
})

rightArrow.addEventListener("click", ()=>{
    const activeSlide = [...sliderItems].find(item=>item.style.display=="flex")
    hideSliderItems()
    activeSlide==sliderItems[sliderItems.length-1]?sliderItems[0].style.display="flex":
    activeSlide.nextElementSibling.style.display="flex"
})

/*Automated Slideshow code*/

displaySlider()

function hideSliderItems(){
    sliderItems.forEach(item=>item.style.display="none")
}


function displaySlider(){
    
    let sliderItems = document.querySelectorAll(".slider-content")
    hideSliderItems()

    currentSliderIndex++;
    if(currentSliderIndex>sliderItems.length){currentSliderIndex=1}
    sliderItems[currentSliderIndex-1].style.display = "flex"
    setTimeout(displaySlider, sliderAnimationDelay)
}







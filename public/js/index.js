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
    setTimeout(()=>mobileViewMenuBackground.classList.remove("zero-opacity"), navMenuBackgroundDelay)
    mobileViewMenu.classList.remove("mobile-view-nav-hide")
}

function mobileViewMenuClose(){
    mobileViewMenu.classList.add("mobile-view-nav-hide")
    mobileViewMenuBackground.classList.add("zero-opacity")
    setTimeout(()=>mobileViewMenuBackground.style.display = "none", navMenuBackgroundDelay)
}

/* Frequently asked questions opening and closing by clicking on a question */

const dropDownAnswers = document.querySelectorAll(".open-close-on-click")
const answers = document.querySelectorAll(".dropdown-answers-list-answer")
const allArrowDown = document.querySelectorAll(".arrowDown")

answers.forEach(elem=>closeElement(elem))
dropDownAnswers.forEach(elem=>elem.addEventListener('click', ()=>toggleElement(elem.parentElement.nextElementSibling)))

function closeElement(elem){
    elem.style.height="1px"
    elem.previousElementSibling.lastElementChild.classList.remove("open")
}

function openElement(elem){

    answers.forEach(elem=>closeElement(elem))
    const contentHeight = elem.childNodes[1].offsetHeight
    elem.style.height = `${contentHeight}px`
    elem.previousElementSibling.lastElementChild.classList.add("open")
}

function toggleElement(elem){
    elem.style.height==="1px"?openElement(elem):closeElement(elem)
}

/*Slider with Parthers Logos animation*/

const clickableDots = document.querySelectorAll(".dot")
const sliderItems = document.querySelectorAll(".slider-content-wrapper")
const leftArrow = document.querySelector(".arrow-left")
const rightArrow = document.querySelector(".arrow-right")
const sliderAnimationDelay=5000;


sliderItems[0].style.display="block"


/*Automated Slideshow code*/

const slideShow = setInterval(()=>showNextSlideItem(), 3000)


/*Sliders controls via left and right arrows */

rightArrow.addEventListener("click", ()=>{showNextSlideItem(), clearInterval(slideShow)})
leftArrow.addEventListener("click", ()=>{showPreviousSlideItem(), clearInterval(slideShow)})

function showNextSlideItem(){
    const activeSlideItem = [...sliderItems].find(item=>item.style.display=="block")
    const nextSlideItem = activeSlideItem==sliderItems[sliderItems.length-1]?sliderItems[0]:activeSlideItem.nextElementSibling;

    activeSlideItem.classList.add("zero-opacity")
    setTimeout(()=>{activeSlideItem.style.display = "none", nextSlideItem.style.display="block"}, navMenuBackgroundDelay)
    setTimeout(()=>nextSlideItem.classList.remove("zero-opacity"), navMenuBackgroundDelay*1.2)
}

function showPreviousSlideItem(){
    const activeSlideItem = [...sliderItems].find(item=>item.style.display=="block")
    const nextSlideItem = activeSlideItem==sliderItems[0]?sliderItems[sliderItems.length-1]:activeSlideItem.previousElementSibling;

    activeSlideItem.classList.add("zero-opacity")
    setTimeout(()=>{activeSlideItem.style.display = "none", nextSlideItem.style.display="block"}, navMenuBackgroundDelay)
    setTimeout(()=>nextSlideItem.classList.remove("zero-opacity"), navMenuBackgroundDelay*1.2)

}

/*Sliders controls via dots */

clickableDots.forEach(dot => dot.addEventListener("click", (e)=>switchSlideViaDots(e.target.id)))

function switchSlideViaDots(dot){
    
    clearInterval(slideShow)
    
    const activeSlideItem = [...sliderItems].find(item=>item.style.display=="block")
    let nextSlideItem;
    
    activeSlideItem == sliderItems[dot]?"": nextSlideItem = sliderItems[dot]

    if(nextSlideItem&&activeSlideItem){

    activeSlideItem.classList.add("zero-opacity")
    setTimeout(()=>{activeSlideItem.style.display = "none", nextSlideItem.style.display="block"}, navMenuBackgroundDelay)
    setTimeout(()=>nextSlideItem.classList.remove("zero-opacity"), navMenuBackgroundDelay*1.2)
    }
}




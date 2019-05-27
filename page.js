
let pageNumber = 0

// Content for the pages
const pages = [

    { copy: "Digital Product Designer", background: "#edc8a9", circle: "#3e78ed" },
    { copy: "From Barcelona" , background: "#a1fffe", circle: "#e34a47" },
    { copy: "Based in Oslo (Norway)", background: "#d3c7f3", circle: "#f7fe00" },
    { copy: "Working at Making Waves", background: "#faffb8", circle: "#b472e6" }

]


const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")

const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")


const next = function (){

    pageNumber = pageNumber + 1

    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }

    updateSection()
}


const previous = function () {

    pageNumber = pageNumber - 1

    if (pageNumber < 0 ) {
        pageNumber = pages.length - 1
    }

    updateSection()
}


const random = function () {

    pageNumber = Math.floor( Math.random() * pages.length)

    updateSection()

}



const updateSection = function (){

    outputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor =  pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background

}




// click events

nextTag.addEventListener('click', function (){
    next()  
})


previousTag.addEventListener('click', function (){
    previous()  
})


randomTag.addEventListener('click', function (){
    random()
})





// when a user presses arrow keys

document.addEventListener("keyup", function (event){

    console.log(event)

    if (event.key == "ArrowRight") {
        next()
    }

    if (event.key == "ArrowLeft") {
        previous()
    }

})
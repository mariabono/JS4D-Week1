
let pageNumber = 0

// Content for the pages
const pages = [

    { copy: "Digital Product Designer", art: "#3e78ed" },
    { copy: "From Barcelona" , art: "#e34a47" },
    { copy: "Based in Oslo (Norway)", art: "#f7fe00" },
    { copy: "Working at Making Waves", art: "#b472e6" }

]


const nextTag = document.querySelector("header img.next")
const previousTag = document.querySelector("header img.prev")
// const randomTag = document.querySelector("footer img.random")

const outputTag = document.querySelector("h1")
const artTag = document.querySelector(".art")
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


// const random = function () {

//     pageNumber = Math.floor( Math.random() * pages.length)

//     updateSection()

// }



const updateSection = function (){

    outputTag.innerHTML = pages[pageNumber].copy
    artTag.style.backgroundColor =  pages[pageNumber].art

}




// click events

nextTag.addEventListener('click', function (){
    next()  
})


previousTag.addEventListener('click', function (){
    previous()  
})


/* randomTag.addEventListener('click', function (){
    random()
})
 */




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
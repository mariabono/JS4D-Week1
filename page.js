
let pageNumber = 0

// Books!
const pages = [

    {   
        title: "El asesinato de Sócrates", 
        author: "Marcos Chicot", 
        sinopsis:"Un recién nacido es condenado a morir por su propio padre. Un oscuro oráculo vaticina la muerte de Sócrates.  Una guerra encarnizada entre Atenas y Esparta desangra Grecia.", 
        art: "url(assets/img/book1.jpeg)", 
        link: "https://www.goodreads.com/book/show/42389196-el-asesinato-de-s-crates" 
    
    },

    {  
        title: "Forest Dark", 
        author: "Nicole Kraus", 
        sinopsis:"Jules Epstein, a man whose drive, avidity, and outsized personality have, for sixty-eight years, been a force to be reckoned with, is undergoing a metamorphosis. ", 
        art: "url(assets/img/book2.jpeg)",
        link: "https://www.goodreads.com/book/show/36671124-forest-dark"
    
    },

    { 
        title: "The Seven Deaths of Evelyn Hardcastle" , 
        author: "Stuart Turton",
        sinopsis:"Tonight, Evelyn Hardcastle will be killed... again. It is meant to be a celebration but it ends in tragedy. As fireworks explode overhead, Evelyn Hardcastle the young and beautiful daughter of the house, is killed.",  
        art: "url(assets/img/book3.jpeg)"  ,
        link: "https://www.goodreads.com/book/show/36405454-the-seven-deaths-of-evelyn-hardcastle"
    
    },

    { 
        title: "Eleanor Oliphant is Completely Fine", 
        author: "Gail Honeyman", 
        sinopsis:"One simple act of kindness is about to shatter the walls Eleanor has built around herself. Now she must learn how to navigate the world that everyone else seems to take for granted – while searching for the courage to face the dark corners she’s avoided all her life.", 
        art: "url(assets/img/book4.jpeg)" ,
        link:"https://www.goodreads.com/book/show/34200289-eleanor-oliphant-is-completely-fine"
    
    },
    
    { 
        title: "Educated", 
        author: "Tara Westover", 
        sinopsis:"Educated is an account of the struggle for self-invention. It is a tale of fierce family loyalty, and of the grief that comes with the severing of the closest of ties.", 
        art: "url(assets/img/book5.jpeg)" ,
        link:"https://www.goodreads.com/book/show/37826561-educated"
    
    },
    
    { 
        title: "The Mystery of Three Quarters", 
        author: "Sophie Hannah", 
        sinopsis:"Hercule Poirot returns home after an agreeable luncheon to find an angry woman waiting to berate him outside his front door. Her name is Sylvia Rule, and she demands to know why Poirot has accused her of the murder of Barnabas Pandy, a man she has neither heard of nor ever met. ", 
        art: "url(assets/img/book6.jpeg)" ,
        link:"https://www.goodreads.com/book/show/36671154-the-mystery-of-three-quarters"
    
    }

]


const nextTag = document.querySelector("nav img.next")
const previousTag = document.querySelector("nav img.prev")
const outputTag = document.querySelector("h1")
const artTag = document.querySelector(".art")
const authorTag = document.querySelector(".author")
const sinopsisTag = document.querySelector("p")
const bodyTag = document.querySelector("body")
const linkTag = document.querySelector(".btn")





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







const updateSection = function (){

    outputTag.innerHTML = pages[pageNumber].title
    authorTag.innerHTML = pages[pageNumber].author
    sinopsisTag.innerHTML = pages[pageNumber].sinopsis
    artTag.style.backgroundImage =  pages[pageNumber].art
    linkTag.href = pages[pageNumber].link

}








// click events

nextTag.addEventListener('click', function (){
    next()  
})


previousTag.addEventListener('click', function (){
    previous()  
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
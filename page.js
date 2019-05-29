
let pageNumber = 0

// Content for the pages
const pages = [

    { title: "El asesinato de Sócrates", author: "Marcos Chicot", art: "url(assets/img/book1.jpeg)" },
    { title: "Forest Dark", author: "Nicole Kraus", art: "url(assets/img/book2.jpeg)" },
    { title: "The Seven Deaths of Evelyn Hardcastle" , author: "Stuart Turton", art: "url(assets/img/book3.jpeg)"  },
    { title: "Eleanor Oliphant is Completely Fine", author: "Gail Honeyman", art: "url(assets/img/book4.jpeg)"  },
    { title: "Educated", author: "Tara Westover", art: "url(assets/img/book5.jpeg)"  },
    { title: "The Mystery of Three Quarters", author: "Sophie Hannah", art: "url(assets/img/book6.jpeg)"  }

]


const nextTag = document.querySelector("header img.next")
const previousTag = document.querySelector("header img.prev")
// const randomTag = document.querySelector("footer img.random")

const outputTag = document.querySelector("h1")
const artTag = document.querySelector(".art")
const authorTag = document.querySelector(".author")
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




const updateSection = function (){

    outputTag.innerHTML = pages[pageNumber].title
    authorTag.innerHTML = pages[pageNumber].author
    artTag.style.backgroundImage =  pages[pageNumber].art

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
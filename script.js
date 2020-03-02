const footer = document.querySelector("footer")
let clickCount = 0
footer.addEventListener("click", () => {
  clickCount ++
  console.log(`clique numéro ${clickCount}`)
})
const toggleNavbar = () => {
 const navBar = document.getElementById("navbarHeader")
 navBar.classList.contains("collapse") ? navBar.classList.remove("collapse") : navBar.classList.add("collapse")
}
const hamburger = document.getElementsByClassName("navbar-toggler")[0]
hamburger.addEventListener("click", toggleNavbar)

const firstCardEditButton = document.getElementsByClassName("btn-group")[0].children[1]
firstCardEditButton.addEventListener("click", () => {
  document.getElementsByClassName("card-text")[0].style.color = 'red'
})
const toggleSecondCardStyle = () => {
  document.getElementsByClassName("card-text")[1].style.color === '' ? document.getElementsByClassName("card-text")[1].style.color = 'green' : document.getElementsByClassName("card-text")[1].style.color = ''
}
const secondCardEditButton = document.getElementsByClassName("btn-group")[1].children[1]
secondCardEditButton.addEventListener("click", toggleSecondCardStyle)
const cdnLink = document.getElementsByTagName("link")[0]
console.log(cdnLink)

const toggleCdn = () => {
  cdnLink.disabled ? cdnLink.disabled = false : cdnLink.disabled = true
}
const navBar = document.getElementsByClassName("navbar")[0]
console.log(navBar)
navBar.addEventListener("dblclick", toggleCdn)

const viewButtons = document.querySelectorAll(".btn-group")
const cardsImages = document.querySelectorAll(".card-img-top")
const cardsTexts = document.querySelectorAll(".card-text")
const toggleElementDisplay = (element) => {
  element.style.display === "none" ? element.style.display = "block" : element.style.display = "none"
}
const toggleImageWidth = (image) => {
  image.style.width === "20%" ? image.style.width = "100%" : image.style.width = "20%"
}
viewButtons.forEach( (group, index) => {
  group.children[0].addEventListener("mouseenter", (e) => {
    toggleImageWidth(cardsImages[index])
    toggleElementDisplay( cardsTexts[index] )
    
  })
})

const customButton2 = document.getElementsByClassName("my-2")[1]
customButton2.addEventListener("click", () => {
  document.getElementsByClassName("row")[1].insertBefore(document.getElementsByClassName("row")[1].children[5], document.getElementsByClassName("row")[1].children[0])
})

const customButton1 = document.getElementsByClassName("my-2")[0]
customButton1.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementsByClassName("row")[1].insertBefore(document.getElementsByClassName("row")[1].children[0], document.getElementsByClassName("row")[1].children[5].nextSibling)
})

const brand = document.getElementsByClassName('navbar-brand')[0]
brand.addEventListener('keypress', (e) => {
  e.preventDefault()
  const body = document.getElementsByTagName("body")[0]
  console.log(e.key)
  switch (e.key) {
    case "a":
     
     if (body.classList.length) {
      body.className = ""
     }
     body.classList.add('col-4')
   
      break;
    case "y":
      
      if (body.classList.length) {
       body.className = ""
      }
      body.classList.add('col-4', 'offset-md-4')
      
      break;
      case "p":
        if (body.classList.length) {
          body.className = ""
         }
         body.classList.add('col-4', 'offset-md-8')
         
      break;
      case "b":
        if (body.classList.length) {
          body.className = ""
         }
        
         
      break;
      
      
    default:
      break;
  }

})
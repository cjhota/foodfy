const modalOverlay = document.querySelector(".modal_overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function() {
    modalOverlay.classList.add("active")
    const cardImg = card.querySelector("img").getAttribute("src")
    const titleImg = card.querySelector("p").innerText
    const authorImg = card.querySelector("span").innerText

    modalOverlay.querySelector("img").setAttribute("src", cardImg)
    modalOverlay.querySelector("img").setAttribute("title", titleImg)
    modalOverlay.querySelector("p").innerHTML = titleImg
    modalOverlay.querySelector("span").innerHTML = authorImg
    
    }) 
}

document.querySelector(".modal_close").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
});
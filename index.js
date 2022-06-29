const menuButton = document.querySelector(".menuButton")
const menu = document.querySelector(".mobileMenu")
const close = document.querySelector(".close")
menuButton.onclick = () => menu.style.display = "flex"

close.onclick = () => menu.style.display = "none"
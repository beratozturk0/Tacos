const menuButton = document.querySelector(".menuButton")
const menu = document.querySelector(".mobileMenu")
const close = document.querySelector(".close")
console.log(menuButton)
menuButton.onclick = () => {
  console.log("tıklandı")
  menu.style.display = "flex"
}
close.onclick = () => {
  menu.style.display = "none"
}
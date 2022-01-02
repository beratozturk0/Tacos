// var sayı1 = 4
// console.log(sayı1)
// var sayı2 = 15
// console.log(sayı2)
// var toplam = sayı1 + sayı2
// console.log(toplam)
// console.log(sayı1 + sayı2)
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
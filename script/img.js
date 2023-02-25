const arrImg = [
  "./img/1.jpg",
  "./img/2.jpg",
  "https://img.lovepik.com/background/20211101/medium/lovepik-art-design-mobile-phone-wallpaper-background-image_400600045.jpg",
  "https://klike.net/uploads/posts/2019-05/1556705578_2.jpg",
]

let centrImg = 0
let leftImg = arrImg.length - 1
let rightImg = centrImg + 1

function imgSlider() {
  // const divIneer = document.querySelector(".img-innit")
  document.querySelector(
    ".content-innit"
  ).innerHTML = `<div class="img-left"></div>
          <div class="img-centr"></div>
          <div class="img-right"></div>`

  let divImgLeft = document.querySelector(".img-left")
  let divImgCentr = document.querySelector(".img-centr")
  let divImgRight = document.querySelector(".img-right")

  divImgLeft.style.backgroundImage = `url(${arrImg[leftImg]})`
  divImgCentr.style.backgroundImage = `url(${arrImg[centrImg]})`
  divImgRight.style.backgroundImage = `url(${arrImg[rightImg]})`

  function nextImg() {
    centrImg += 1
    leftImg = centrImg - 1
    rightImg = centrImg + 1
    if (rightImg >= arrImg.length) {
      rightImg = 0
    }
    if (centrImg === arrImg.length) {
      centrImg = 0
      leftImg = arrImg.length - 1
      rightImg = centrImg + 1
    }

    divImgLeft.style.backgroundImage = `url(${arrImg[leftImg]})`
    divImgCentr.style.backgroundImage = `url(${arrImg[centrImg]})`
    divImgRight.style.backgroundImage = `url(${arrImg[rightImg]})`
  }

  function backImg() {
    centrImg -= 1
    rightImg = centrImg + 1
    leftImg = centrImg - 1
    if (leftImg == -1) {
      leftImg = arrImg.length - 1
    }
    if (centrImg < 0) {
      centrImg = arrImg.length - 1
      leftImg = centrImg - 1
      rightImg = 0
      console.log(`центр ${centrImg}`)
    }
    console.log("backImg")
    console.log(leftImg + " " + centrImg + " " + rightImg)
    divImgLeft.style.backgroundImage = `url(${arrImg[leftImg]})`
    divImgCentr.style.backgroundImage = `url(${arrImg[centrImg]})`
    divImgRight.style.backgroundImage = `url(${arrImg[rightImg]})`
  }

  divImgRight.onclick = nextImg
  divImgLeft.onclick = backImg
  document.addEventListener("click", (e) => {
    console.log(e.target)
  })
}

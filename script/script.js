let userEmailInput = document.querySelector(".email-input")
let userPasswordInput = document.querySelector(".password-input")

document.querySelector(".btn-int").addEventListener("click", () => {
  document.querySelector(".input_user").style.display = "block"
})

document.querySelector(".user-int").addEventListener("click", () => {
  if (
    userEmailInput.value === user1.email &&
    userPasswordInput.value === user1.password
  ) {
    document.querySelector(".input_user").style.display = "none"
    userPasswordInput.value = ""
    userEmailInput.value = ""
    document.querySelector(".btn-int").innerHTML = `<p>${user1.name}</p>`
    document.querySelector(".registration").innerHTML = `<p>Выход</p>`
    document.querySelector(".registration").classList.add("btn-out")
  } else {
    document.querySelector(".error-user").style.display = "block"
  }
})

window.document.querySelector(".registration").addEventListener("click", () => {
  document.querySelector(".btn-int").innerHTML = `<p>Вход</p>`
  document.querySelector(".registration").innerHTML = `<p>Регистрация</p>`
  document.querySelector(".registration").classList.remove("btn-out")
})

document.querySelector(".cancellation").addEventListener("click", () => {
  document.querySelector(".input_user").style.display = "none"
})

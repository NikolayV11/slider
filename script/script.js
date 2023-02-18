let userEmailInput = document.querySelector(".email-input")
let userPasswordInput = document.querySelector(".password-input")
const btnNext = document.querySelector(".btn-next")
const btnReg = document.querySelector(".button-registration")
// поля ввода при регистрации
let userNewName = document.querySelector(".new-user-name")
let userNewAge = document.querySelector(".new-user-age")
let userNewDate = document.querySelector(".new-user-date")
let userNewPhone = document.querySelector(".new-user-phone")
let userNewEmail = document.querySelector(".new-user-email")
let userNewCyti = document.querySelector(".new-user-cyti")
let userNewStreet = document.querySelector(".new-user-street")
let userNewHose = document.querySelector(".new-user-hose")
let userNewPassword = document.querySelector(".new-user-password")
// кнопка входа
document.querySelector(".btn-int").addEventListener("click", () => {
  document.querySelector(".input_user").style.display = "block"
  if (document.querySelector(".user-registration").style.display === "block") {
    document.querySelector(".user-registration").style.display = "none"
  }
})
// кнопка регистрации
document.querySelector(".registration").addEventListener("click", () => {
  document.querySelector(".user-registration").style.display = "block"
  if (document.querySelector(".input_user").style.display === "block") {
    document.querySelector(".input_user").style.display = "none"
  }
})
// кнопка закрытия поля регистрации
document.querySelector(".cancellation-user").addEventListener("click", () => {
  document.querySelector(".user-registration").style.display = "none"
})
// кнопка закрытия поля входа
document.querySelector(".cancellation").addEventListener("click", () => {
  document.querySelector(".input_user").style.display = "none"
})
// поле входа
btnNext.addEventListener("click", () => {
  let userIndex = users.findIndex((item) => item.email == userEmailInput.value)
  if (userIndex === -1) {
    document.querySelector(".error-user").style.display = "block"
    document.querySelector(".error-user").innerHTML = `<p>Не верный логин</p>`
  } else if (users[userIndex]["email"] == userEmailInput.value) {
    document.querySelector(".error-user").style.display = "none"
    document.querySelector(".user-email").style.display = "none"
    document.querySelector(".button-next").style.display = "none"
    document.querySelector(".user-password").style.display = "block"
    document.querySelector(".button-user").style.display = "block"
    let i = 0
    document.querySelector(".user-int").addEventListener("click", () => {
      if (i < 3) {
        if (userPasswordInput.value === "") {
          i++
          document.querySelector(".error-user").style.display = "block"
          document.querySelector(
            ".error-user"
          ).innerHTML = `<p>Не ничего не ввели</p>
          <p>Вы использовали попыток ${i}</p>`
        } else if (users[userIndex]["password"] != userPasswordInput.value) {
          i++
          document.querySelector(".error-user").style.display = "block"
          document.querySelector(
            ".error-user"
          ).innerHTML = `<p>Не верный пароль</p>
          <p>Вы использовали попыток ${i}</p>`
        } else if (users[userIndex]["password"] === userPasswordInput.value) {
          i = 0
          document.querySelector(".input_user").style.display = "none"

          document.querySelector(".btn-out").style.display = "block"
          document.querySelector(".btn-user").style.display = "block"
          document.querySelector(".registration").style.display = "none"
          document.querySelector(".btn-int").style.display = "none"
          document.querySelector(
            ".btn-user"
          ).innerHTML = `<p>${users[userIndex]["name"]}`
        }
      } else if (i == 3) {
        document.querySelector(
          ".user-content"
        ).innerHTML = `<div class="error-user">
        <p>Вы потратили все попытки</p></div>`
      }
    })
  }
})
// кнопка выход
document.querySelector(".btn-out").addEventListener("click", () => {
  document.querySelector(".btn-out").style.display = "none"
  document.querySelector(".btn-user").style.display = "none"
  document.querySelector(".registration").style.display = "block"
  document.querySelector(".btn-int").style.display = "block"
})
// поле регистрации
btnReg.addEventListener("click", () => {
  if (users.findIndex((item) => item.email == userNewEmail.value) === -1) {
    if (userNewEmail.value === "") {
      alert("Поле 1 пустое")
    } else {
      if (userNewName.value === "") {
        alert("Поле 2 пустое")
      } else {
        if (userNewAge.value === "") {
          alert("Поле 3 пустое")
        } else {
          if (userNewDate.value === "") {
            alert("Поле 4 пустое")
          } else {
            if (userNewPhone.value === "") {
              alert("Поле 5 пустое")
            } else {
              if (userNewCyti.value === "") {
                alert("Поле 6 пустое")
              } else {
                if (userNewStreet.value === "") {
                  alert("Поле 7 пустое")
                } else {
                  if (userNewHose.value === "") {
                    alert("Поле 8 пустое")
                  } else {
                    if (userNewPassword.value === "") {
                      alert("Поле 9 пустое")
                    } else {
                      users.push(
                        new User(
                          userNewName.value,
                          +userNewAge.value,
                          userNewDate.value,
                          +userNewPhone.value,
                          userNewEmail.value,
                          userNewCyti.value,
                          userNewStreet.value,
                          userNewHose.value,
                          userNewPassword.value
                        )
                      )
                      document.querySelector(
                        ".user-registration"
                      ).style.display = "none"
                      document.querySelector(".input_user").style.display =
                        "block"
                      console.log(users)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    alert("Такой Email уже используется")
  }
})

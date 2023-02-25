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

function userInPass() {
  document.querySelector(".error-user").style.display = "none"

  document.querySelector(".user-email").style.display = "none"

  document.querySelector(".button-next").style.display = "none"
  document.querySelector(".user-password").style.display = "block"

  document.querySelector(".button-user").style.display = "block"
}

function userInEmail() {
  document.querySelector(".error-user").style.display = "block"

  document.querySelector(".user-email").style.display = "block"

  document.querySelector(".button-next").style.display = "block"
  document.querySelector(".user-password").style.display = "none"

  document.querySelector(".button-user").style.display = "none"
}

// поле входа
btnNext.addEventListener("click", () => {
  let userIndex = users.findIndex((item) => item.email == userEmailInput.value)

  if (userIndex === -1) {
    document.querySelector(".error-user").style.display = "block"

    document.querySelector(".error-user").innerHTML = `<p>Не верный логин</p>`
  } else if (users[userIndex]["email"] == userEmailInput.value) {
    userInPass()

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

          document.querySelector(".input").innerHTML = `
              <button class="btn-user"></button>`

          document.querySelector(
            ".output"
          ).innerHTML = `<button class="btn-out"><p>Выход</p></button>`

          document.querySelector(
            ".btn-user"
          ).innerHTML = `<p>${users[userIndex]["name"]}`

          document.querySelector(
            ".navigation"
          ).innerHTML = `<button class="btn-vidio"><p>Видео</p></button>
            <button class="btn-img"><p>Галерея</p></button>
            <button class="btn-music"><p>Музыка</p></button>`

          document
            .querySelector(".btn-img")
            .addEventListener("click", imgSlider)

          // // кнопка выход
          document.querySelector(".btn-out").addEventListener("click", () => {
            document.querySelector(
              ".input"
            ).innerHTML = `<button class="btn-int">Вход</button>`

            document.querySelector(
              ".output"
            ).innerHTML = `<button class="registration">Регистрация</button>`

            document.querySelector(".content-innit").innerHTML = ""

            document.querySelector(".navigation").innerHTML = ""

            // кнопка входа
            document.querySelector(".btn-int").addEventListener("click", () => {
              userInEmail()
              document.querySelector(".input_user").style.display = "block"
              console.log(1)
              if (
                document.querySelector(".user-registration").style.display ===
                "block"
              ) {
                document.querySelector(".user-registration").style.display =
                  "none"
              }
            })

            // кнопка регистрации
            document
              .querySelector(".registration")
              .addEventListener("click", () => {
                document.querySelector(".user-registration").style.display =
                  "block"

                if (
                  document.querySelector(".input_user").style.display ===
                  "block"
                ) {
                  document.querySelector(".input_user").style.display = "none"
                }
              })
            inputDel()
          })
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
                      inputDel()
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

// кнопка входа
document.querySelector(".btn-int").addEventListener("click", () => {
  document.querySelector(".input_user").style.display = "block"
  console.log(1)
  inputDel()
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
  inputDel()
})

// кнопка закрытия поля регистрации
document.querySelector(".cancellation-user").addEventListener("click", () => {
  document.querySelector(".user-registration").style.display = "none"
  inputDel()
})

// кнопка закрытия поля входа
document.querySelector(".cancellation").addEventListener("click", () => {
  document.querySelector(".input_user").style.display = "none"
  inputDel()
})

function inputDel() {
  userEmailInput.value = ""
  userPasswordInput.value = ""

  // поля ввода при регистрации
  userNewName.value = ""
  userNewAge.value = ""
  userNewDate.value = ""
  userNewPhone.value = ""
  userNewEmail.value = ""
  userNewCyti.value = ""
  userNewStreet.value = ""
  userNewHose.value = ""
  userNewPassword.value = ""
}

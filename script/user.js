let users = []

function User(name, age, data, phone, email, cyti, street, house, password) {
  this.name = name
  this.age = age
  this.data = data
  this.phone = phone
  this.email = email
  this.cyti = cyti
  this.street = street
  this.house = house
  this.password = password
  this.id = users.length
}

users.push(
  new User(
    "Nicklaus",
    28,
    "14.07.1990",
    89518888888,
    "Nicklaus90@mail.ru",
    "Москва",
    "Гагарина",
    94,
    "1"
  )
)

users.push(
  new User(
    "John",
    21,
    "25.02.1998",
    8654346,
    "was@mail.ru",
    "Челябинск",
    "Ленина",
    54,
    "123"
  )
)

users.push(
  new User(
    "Anna",
    21,
    "25.02.1998",
    8654346,
    "wasi@mail.ru",
    "Челябинск",
    "Ленина",
    54,
    "123"
  )
)

users.push(
  new User(
    "Anna",
    22,
    "25.02.1997",
    8654346,
    "wais@mail.ru",
    "Челябинск",
    "Ленина",
    54,
    "123"
  )
)

console.log(1)

const fruits = ["apple", "banana", "pear", "peach", "strawberry", "mango"]

const form = document.getElementById("form")
const error = document.getElementById("error")
const filtered = document.getElementById("filtered")
const word = document.getElementById("word")


const showFiltered = (filtereds) => {
  filtered.innerHTML = ""
  filtereds.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item
    filtered.appendChild(li)

  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const text = word.value.trim().toLowerCase()
  if (text === "") {
    error.textContent = "Input any letter, please"
    filtered.innerHTML = ""
    return

  }
  error.textContent = ""

  const filteredss = fruits.filter(item => item.toLowerCase().includes(text))

  showFiltered(filteredss)

})
//Unique commit
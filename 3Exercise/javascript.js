const todosEndpoint = "https://jsonplaceholder.typicode.com/todos"
const loading = document.getElementById("loading")
const BTNcharge = document.getElementById("BTN-charge")
const error = document.getElementById("error")
const list = document.getElementById("completedToDosUl")

BTNcharge.addEventListener("click", async () => {
  list.innerHTML = ""
  loading.style.display = "block"

  const response = await fetch(todosEndpoint)

  loading.style.display = "none"

  if (!response.ok) {
    error.textContent = `it was a problem: ${response.status} - ${response.statusText}`
    return
  }

  const data = await response.json()

  const completedToDos = data.filter(todo => todo.completed === true)

  if (completedToDos.length > 0) {
    completedToDos.forEach(todo => {
      const li = document.createElement("li")
      li.textContent = `The id of the todo: ${todo.id}, the title: ${todo.title} `
      list.appendChild(li)
    }
    );
  } else {
    list.innerHTML = "<strong>There aren't any completed todos</strong>"
  }
})
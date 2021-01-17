// document.addEventListener("DOMContentLoaded", () => {
  

// function renderOneInput(inputObject) {
  
// }

//   const submitButton = document.querySelector("#create-task-form")

//   submitButton.addEventListener("submit", function(event) {
//     event.preventDefault()
//     //debugger
//     const inputText = document.querySelector("input[type='text']").value
//     //event.target //.newTaskDescription   //.new-task-description.value matches name but does not post
//     //const newTaskDescription = document.getElementById("new-task-description");

//     // inputText.innerText = newTaskDescription.value
//     //inputText.value 

//     // renderOneInput(inputText)

//     const lists = document.querySelector('#tasks')

//     const innerLi = document.createElement('li')
//   //debugger
//     innerLi.textContent = inputText
                      
//     lists.append(innerLi)
   
//     event.target.reset()
//     //debugger
//   })
  
// });






const entireForm = document.querySelector('#create-task-form')
const taskDescription = document.querySelector('#new-task-description')
const taskList = document.querySelector('#tasks')



entireForm.addEventListener('submit', function(e) {
  e.preventDefault()
  
  let newLI = document.createElement('li')
  let newButton = document.createElement('button')


  newLI.innerText = taskDescription.value + "       "
  newButton.innerText = "X"

  newLI.append(newButton)

  taskList.append(newLI)

  

  e.target.reset()
})



















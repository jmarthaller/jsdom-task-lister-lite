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













































{/* <form id="form">
  <label>Test field: <input type="text"></label>
  <br><br>
  <button type="submit">Submit form</button>
</form>
<p id="log"></p> */}

// function logSubmit(event) {
//     log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//     event.preventDefault();
//   }
  
//   const form = document.getElementById('form');
//   const log = document.getElementById('log');
//   form.addEventListener('submit', logSubmit);


const taskForm = document.querySelector('#create-task-form')
const taskList = document.querySelector('#tasks')


taskForm.addEventListener('submit', function(e) {
    e.preventDefault()

    let newTask = document.createElement('li')
    newTask.classList.add('newest')
    //debugger
    // console.log(e.target)
    // const taskData = e.target.value
    const newTaskDescription = document.getElementById("new-task-description");
    newTask.textContent = newTaskDescription.value

    taskList.append(newTask)

    e.target.reset()
})



const inputTask = document.querySelector('#item-lista')
const btnTask = document.querySelector('.btn-tarefa')
const task = document.querySelector('.tarefas')

function creatLi(){
    const li = document.createElement('li')
    return li
}

function creatTask(txtInput){
    const li = creatLi()
    li.innerText = txtInput
    task.appendChild(li)
}  

btnTask.addEventListener('click', function(e){
    if (!inputTask.value){
        return
    }
    creatTask(inputTask.value)
})
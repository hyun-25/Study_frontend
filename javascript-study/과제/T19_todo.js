// 요소 선택 및 배열 선언
const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
let todoArr = [];

//할일 추가하기, 할일 보여주기, 할일 수정하기, 할일 삭제하기

// displayTodos 함수 (할일 보여주기)
function displayTodos(){
  todoList.innerHTML = ""
  todoArr.forEach((aTodo) => {
    const todoItem = document.createElement('li')
    const todoDelBtn = document.createElement('span')
    todoDelBtn.innerText = 'x'
    todoDelBtn.title = '클릭시 삭제'
    todoItem.innerText = aTodo.todoText
    todoItem.title = '클릭시 완료'
    todoItem.classList.add(aTodo.todoDone ? 'done' : 'yet')
    todoItem.appendChild(todoDelBtn)

    todoDelBtn.addEventListener('click', function(){
      handleTodoDelBtnClick(aTodo.todoId)
    })

    todoItem.addEventListener('click', function(){
      handleTodoItemClick(aTodo.todoId)
    })
    todoList.appendChild(todoItem)
  });
}

// handleTodoDelBtnClick 함수 (할일 삭제하기)
function handleTodoDelBtnClick(clickedId){
  todoArr = todoArr.filter(function(aTodo){
    return aTodo.todoId !== clickedId
  })
  displayTodos()
  saveTodos()
}

// handleTodoItemClick 함수 (할일 수정하기)
//좀더 이해 필요
function handleTodoItemClick(clickedId){
  todoArr = todoArr.map(function(aTodo){
    return aTodo.todoId !== clickedId ? 
    aTodo : { ...aTodo, todoDone: !aTodo.todoDone } 
  })
  displayTodos()
  saveTodos()
}

// saveTodos 함수(로컬저장소에 저장하기)
function saveTodos(){
  const todoSting = JSON.stringify(todoArr)
  localStorage.setItem('myTodos', todoSting)
}

// loadTodos 함수 (로컬 저장소에서 가져오기)
function loadTodos(){
  const myTodos = localStorage.getItem('myTodos') 
  todoArr = myTodos !== null ? JSON.parse(myTodos) : todoArr
  displayTodos()
}

// 할일 입력 후 제출하면 발생하는 이벤트 핸들링 (할일 추가하기)
todoForm.addEventListener('submit', function(e){
  e.preventDefault()
  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(), //gettime 시간정보를 정수 형태로 해줌
    todoDone: false
  }
  todoForm.todo.value = "" //추가하면 화면상에서 비우기
  todoArr.push(toBeAdded)
  displayTodos()
  saveTodos()
})

loadTodos() // 시작할 때 한번만!
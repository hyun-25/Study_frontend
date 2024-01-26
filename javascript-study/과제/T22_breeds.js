/*
과제
- 견종 고르는 셀렉트 옆에 버튼 하나 추가
- 버튼에 리셋이라고 쓴다
- 해당 버튼을 누르면 강아지 42마리의 소스를 새롭게 요청해 받아온다
- 존에 뿌려져 있던 강아지는 모두 사라지고, 새로운 강아지 42마리로 채워진다
*/

const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
    const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
    const request1 = new XMLHttpRequest()
    const request2 = new XMLHttpRequest()

    const header = document.getElementById("header")
    const main = document.getElementById("main")
    const input = document.getElementById("filter-text")
    const button = document.getElementById("filter-button")
    const resetButton = document.getElementById("reset-button") // 리셋 버튼 추가
    const select = document.getElementById("filter-select")
    const more = document.getElementById("more")
    const tothetop = document.getElementById("tothetop")

    // 현재 보이는 강아지
    const currentDogs = []

    function displayDogs(item) {
      const dogImgDiv = document.createElement("div")
      dogImgDiv.classList.add("flex-item")
      dogImgDiv.innerHTML = `
        <img src=${item}>
      `
      main.appendChild(dogImgDiv)
    }

    // 리셋 버튼 클릭 시 동작
    resetButton.addEventListener("click", function () {
      main.innerHTML = ""
      request1.open("GET", apiRandomDogs)
      request1.addEventListener("load", function () {
        const response = JSON.parse(request1.response)
        currentDogs.length = 0 // 현재 강아지 배열 초기화
        response.message.forEach(function (item) {
          currentDogs.push(item)
          displayDogs(item)
        });
      })
      request1.send()
    })

//웹페이지가 최초 로딩되었을떄의 동작
window.addEventListener("load", function(){

  // 강아지 사진 뿌리기
  request1.open("GET", apiRandomDogs)
  request1.addEventListener("load", function(){
    
    //강아지 사진 그리는 파트
    const response = JSON.parse(request1.response) //객체 형태로 저장
    response.message.forEach(function(item){ //foreach 모든 요소에 한번씩
        currentDogs.push(item)
        displayDogs(item)
    });
  })
  request1.send()

  // 견종 텍스트 뿌리기
  request2.open("GET", apiAllBreeds)
  request2.addEventListener("load", function(){
    const response = JSON.parse(request2.response)
    //object.keys -> 객체의 키 값만 모아서 배열로 반환
    Object.keys(response.message).forEach(function(item){
      const option = document.createElement("option")
      option.textContent = item
      option.value = item
      select.appendChild(option)
    });
  })
  request2.send()
})

button.addEventListener("click", function(){
  main.innerHTML = ""
  let filteredDogs = currentDogs.filter(function(item){
    return item.indexOf(input.value) !== -1
  })
  input.value = ""
  filteredDogs.forEach(function(item){
    displayDogs(item)
  });
})

select.addEventListener("change", function(){
  main.innerHTML = "" //일단 지움
  let filteredDogs = currentDogs.filter(function(item){
    return item.indexOf(select.value) !== -1 //indexof -> index가지지 않으면 -1반환
  })
  
  filteredDogs.forEach(function(item){
    displayDogs(item)
  });
})

more.addEventListener("click", function(){
  // 강아지 사진 더 불러와서 추가하고 뿌리기
  //차이 = innerhtml안지움 -> 추가하는거
  request1.open("GET", apiRandomDogs)
  request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response)
    response.message.forEach(function(item){
      currentDogs.push(item)
      displayDogs(item)
    });
  })
  request1.send()
})

tothetop.addEventListener("click", function(){
  window.scrollTo({ top: 0 })
})



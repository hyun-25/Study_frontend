//제출 이벤트를 받는다 (이벤트 핸들링)

//제출된 입력 값들을 참조한다

//입력값에 문제가 있는 경우 이를 감지한다

//가입 환영 인사를 제공한다

const form = document.getElementById("form")

//이름 없는 함수 : 익명함수
form.addEventListener("submit", function(event){
    event.preventDefault() //기존기능 차단

    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value
    
    /*console.log(userId, userPw1, userPw2, userName,
         userPhone, userPosition, userGender, userEmail, userIntro)
         */

    if(userId.length < 6){
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
        return //문제가 생기면 강제종료. 문제가 두개 있어도 하나만 있는것처럼 나온다.
    }

    if( userPw1 !== userPw2){
        alert("비밀번호가 일치하지 않습니다.")
        return
    }

    //가입 잘 되었다 환영!
    document.body.ineerHTML = "" // 아무것도 없는 body태그
    document.write(`<p>${userID}님 환영합니다</p>`)

})
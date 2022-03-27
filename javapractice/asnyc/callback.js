'use strict'

//Javascript 는 synchronous. (자바스크립트는 동기적이다)
// order after hoisting (hoisting = var, function declaration 함수, 변수 선언을 어디에있는 앞당겨서 선언된다)

console.log('1')
setTimeout(()=>{console.log('2')},1000) //시간을 지정해주는 함수 (콜백함수를 전달 )

console.log('3')

 // 1이 출력, 브라우저에 1초 기다리라는 시간을 주지만, 비동기적이기 때문에 3이 먼저 출력되고 브라우저의 1초가 끝나면 2가 출력



 // Synchronous callback -> 동기적 콜백
 const printImmediatly=(print)=>{ //hoisting이 되기 때문에 젤 위로 올라가져서 선언됨
    print() 
 }

 printImmediatly(()=>console.log('hello'))  //1->3->hello->2 순으로 출력

 // Asynchronous callback -> 비동기적 콜백

 const printWithDelay=(print, timeout)=>{
     setTimeout(print, timeout)
 }

 printWithDelay(()=>console.log('async callback'),2000)


 //콜백 지옥? : 콜백을 계속 써서 터지는것

 class UserStorage { //로그인 하는 모듈 
     loginUser(id, password, onSuccess, onError){ //받아온 아이디 비번을 검사 2초 소요 가정
        setTimeout(()=>{
            if((id==='me' && password==='5933') ||(id==='you' && password==='3375') ) {onSuccess(id)}
            else{onError(new Error('not found'))}
        }, 2000) 
     }

     getRoles(user, onSuccess, onError){ //받아온 아이디에 따른 역할을 받아오기 2초가정
        setTimeout(()=>{
            if (user==='me'){onSuccess({name: 'me', role: 'admin'})}
            else{onError(new Error('not access'))}
        },2000)
    }
}

    //1. 아이디 비번을 받아오기 2.로그인하기 3.로그인하는 사용자 아이디를 이용해 역할을 요청해 받아오기

const userStorage = new UserStorage()
const id=prompt('enter your id')
const password=prompt('enter your password')

userStorage.loginUser(
    id, 
    password, 
    user=>{
        userStorage.getRoles(
            user, 
            userWithRole=>{
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            }, 
            error=>{console.log(error)}
        )
    }, 
    error=>{console.log(error)}
)           //가독성이 너무 많이 떨어짐 , 로직 이해 어려움 
 

class UserStorage { //로그인 하는 모듈 
    loginUser(id, password){ //받아온 아이디 비번을 검사 2초 소요 가정
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if((id==='me' && password==='5933') ||(id==='you' && password==='3375') ) {resolve(id)}
                else{reject(new Error('not found'))}
            }
            , 2000)
        })
        
    }

    getRoles(user){ //받아온 아이디에 따른 역할을 받아오기 1초가정
       return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (user==='me'){resolve({name: `${user}`, role: 'admin'})}
                else{reject(new Error('no access'))}
            }
            ,1000)
       })
        
   }
}

   //1. 아이디 비번을 받아오기 2.로그인하기 3.로그인하는 사용자 아이디를 이용해 역할을 요청해 받아오기

const userStorage = new UserStorage()
const id=prompt('enter your id')
const password=prompt('enter your password')

userStorage
    .loginUser(id,password)
    .then(userStorage.getRoles)
    .then(user=>{alert(`Hello ${user.name}, you have a ${user.role} role`)})
    .catch(console.log)

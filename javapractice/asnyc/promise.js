'use strict'

// Promise is a JavaScript obj for asynchronous operation. state 에 대한 이해, producer 와 consumer 사이의 이해
// state: pending(실행중) -> fulfiied(완료) or rejected(실패)
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject)=>{  //resolve/ reject 를 받는다
    //doing heavy work (neywork or read files)
    console.log('doing something...')
    setTimeout(()=>{
        resolve('Hi') //일을 잘 마무리함
        reject(new Error('no network'))  //Error 도 자바스크립트 오브젝트 => uncaught 라고 뜬다. => catch 활용해 잡아줌
    }, 2000)
})

// 2. Consumer: then, catch, finally
promise
    .then(value=>{   //value 는 resolve 값 (정상적인 값)
        console.log(value)
    })
    .catch(error=>{    //실패한 값, chaining 때문에, then 또 promise 를 return 하기 때문에 catch 가능
        console.log(error)
    })
    .finally(()=>{
        console.log('finally')
    }) // 성공하든 실패하든 나오는 것
    

// 3. Promise chaining

 const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(1)}, 1000) //1초 소요 
 })

 fetchNumber //then 은 값을 바로 전달해도 되고 프로미스를 전달해도 된다.
    .then(num => num *2) //1받고 2
    .then(num => num *3) //2받고 6
    .then(num=>{ 
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{resolve(num-1)},1000) //6받고 5 (promise 출력)
        })
    })
    .then(num=>console.log(num))

//4. Error handling

const getHen=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Hen'),1000)
        // setTimeout(()=>reject(new Error('Hen')),1000)
    })
}

const getEgg=(Hen)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`${Hen}=>Egg`),1000)
        // setTimeout(()=>reject(new Error(`${Hen}=>Egg`)),1000)
    })
}

const cook=(egg)=>{
    return new Promise((resolve,reject)=>{
        // setTimeout(()=>resolve(`${egg}=>FriedEgg`),1000)
        setTimeout(()=>reject(new Error(`${egg}=>FriedEgg`)),1000)
    })
}

// getHen() 
//     .then(hen=>getEgg(hen))
//     .then(egg=>cook(egg))
//     .then(FriedEgg=>console.log(FriedEgg))

getHen()   // 입력 변수가 하나고 그대로 쓰이면 변수 생략가능(함수만 사용)
    .catch(console.log)
    .then(getEgg)
    .catch(console.log)
    .then(cook)
    .catch(console.log)
    .then(console.log) 



//5 call back 을 promise로 
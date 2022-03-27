// async & await
// clear style of using promise 

// 1. async

const fetchUser= async()=>{ 
    // 10초 걸린다고 가정 
    //만약 비동기적인 처리를 하지 않는다면 10초간 여기 머물러서 너무 오래걸린다.
    return 'ellie'
}


const user = 
    fetchUser() 
    .then(console.log)
    

// 2. await

const delay=(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms))
}

const getApple=async()=>{
    await delay(1000)
    return 'apple'
}

const getBanana=async()=>{
    await delay(1000)
    return 'banana'
}

    const pickFruits=()=> {
        return getApple()
        .then(apple=>{
            return getBanana().then(banana=>`${apple},${banana}`) //like callback hell
        })}

const pickFruits =async()=>{
    const apple = await getApple()
    const banana= await getBanana()
    return `${apple}+${banana}`
}

pickFruits().then(console.log)

// await 병렬처리 (useful Promise API) 

const fastpickFruits =async()=>{
    return Promise.all([getApple(),getBanana()]) //두개 promise를 병렬로 받아온다, return은 array로
    .then(fruits=>fruits.join(' + ')) // array 를 + 끼워넣고 string 으로 convert

}

fastpickFruits().then(console.log)


const pickOnlyOne=()=>{
    return Promise.race([getApple(),getBanana()])
}

pickOnlyOne().then(console.log)
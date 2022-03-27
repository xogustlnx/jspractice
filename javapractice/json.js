// JSON 

//  simplest data interchange format
// light, easy to read
// consist of key-value pairs
// serialization, transmission
// language에 구애받지 않는 자료형

// 1. Object to JSON

let json= JSON.stringify(true) //true 를 string으로 변환
console.log(json)

json=JSON.stringify(['apple','banana']) //array도 string으로 변환
console.log(json)

const rabbit = {
    name:'tori',
    color: 'white',
    size: null,
    jump: (name)=>{ 
        console.log(`${name} can jump!`)
    }
}

json=JSON.stringify(rabbit) //Object를 string 으로 변환
console.log(json) //jump라는 함수나 symbol은 변환되지 않는다.

json=JSON.stringify(rabbit, ['name']) //array 형태로 전달해, 원하는 property만 변환 가능
console.log(json) 

//or callback 함수 쓰기 -> 더 자세하게 가능
json=JSON.stringify(rabbit, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`)
    return value
} )

console.log(json)


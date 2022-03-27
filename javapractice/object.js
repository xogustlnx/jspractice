// Objects

// Object = {key, value} 로 consist


const obj1 = {} // object literal
const obj2 = new Object() // object constructor

const ellie = {name : 'ellie', age: 4}
console.log(ellie);

ellie.hasJob = true  // object를 추가 가능

delete ellie.hasJob // object 삭제 가능

    

// 2. Computed properties

console.log(ellie.name)
console.log(ellie['name']) //object 를 array 처럼 접근이 가능하다 근데 Key 는 string type으로 받아와야한다.

ellie['hasJob'] = true
console.log(ellie.hasJob)

    // .을 보통 많이 쓴다. []는 실시간으로 받아올 때 쓴다

const printValue=(obj,key)=>{
    console.log(obj[key]) 
}  // []를 이 때 쓴다. .을 쓰면 안됨(obj라는 local p 에는 key가 없기 때문)
printValue(ellie, 'name')


// 3. Property value shorthand

  //이렇게 만들면 힘듬
const person1 = {name: 'bob', age: 2 }


 //함수를 통한 object 생성
const makePerson=(name, age)=>{
    return{  
        name: name, age: age
    }
} 

 //발전된 object생성
const makePerson2=(name, age)=>{
    return{
        name,age //이렇게 써도 인식한다.
    }
} 

// 4. class 와 같이 생성 ==> Constructor fucntion
function Person(name,age){
    this.name=name
    this.age=age
} 

const person2=makePerson('sin',17)
console.log(person2)

// 5. in operater: property exist??
console.log('name' in ellie) //확인가능

// 6. for...in, for...of


 // object 는 in으로 for 돌리기
for (key in ellie){ 
    console.log(ellie[key]) //여기도 [ ]로 접근해주어야 한다.
}


 //array는 of로 for 돌리기 
const array = [1,2,3,4]

for (value of array){ 
    console.log(value)
}


// 7. Cloning

const user = {name: 'ellie', age: 20}
const user2 = user
    //이렇게 되면 값을 공유 -> 한쪽이 바뀌면 둘다 바뀜

 //복사

const user3={... user}
 //or
const user4= Object.assign({},user)

 //another example
const fruit1 = {color:'red'}
const fruit2 = {color:'blue' , size='small'}

const mixed=Object.assign({},fruit1,fruit2) //뒤의 object가 앞을 덮어쓰는 형식, blue로 덮힌다.

console.log(mixed.color)


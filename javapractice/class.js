'use strict'

// class: template
// object: instance of class 

// 1. Class declarations

class Person {
    constructor(name, age) {
        this.name=name
        this.age=age
    }

    speak(){
        console.log(`${this.name}: hello!`)
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name)
console.log(ellie.age)
ellie.speak()

//2. Getter & Setter

class User{
    constructor(firstName, lastName, age) {
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }

    get age() {
        return this._age
    }

    set age(value) {
        this._age = value <0 ? 0 : value
    }
}

const user1 = new User('Steve', 'Jobs', -1)
console.log(user1.age)


// 3. Fields (public, private)



// 4. Static (고정된) 데이터에 상관 없이 class 가 고유하게 가지고 있는 데이터

class Article{
    static publisher = 'Good'
    constructor(articleNumber){
        this.articleNumber=articleNumber
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article(1)
const article2 = new Article(2)

Article.printPublisher() //-> static 으로 define 된 data는 class 자체의 이름으로 호출해야 한다. 
                        // -> 오브젝트 공통으로 쓰이는 것에 유용하게 쓰인다.


// 5. 상속 & 다양성 (Inheritance-extend)
   // 예시로 도형이라는 큰 class 를 만들고, 그것을 삼각형 등으로 확장
class Shape{
    constructor(width, height, color){
        this.width= width
        this.height=height
        this.color=color
    }

    draw(){
        console.log(`drawing ${this.color} color !`)
    }

    getArea(){
        return this.width * this.height
    }
}

class Rectangle extends Shape{}

class Triangle extends Shape{ //overide 가능
    draw() {
        super.draw() //super 를 통해 overdrive 전의 함수를 호출 가능
        console.log('🔺')
    }
    getArea(){
        return this.width * this.height/2
    }
} 

const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw()
console.log(rectangle.getArea())

const triangle= new Triangle(20, 20, 'red')
triangle.draw()
console.log(triangle.getArea())



// 6. Class checking instanceOf

console.log(rectangle instanceof Rectangle)
console.log(triangle instanceof Rectangle)
console.log(triangle instanceof Shape)
console.log(triangle instanceof Object)



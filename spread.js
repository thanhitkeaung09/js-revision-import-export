const product = {
    name : "Apple",
    price : 100,
}

const prodcutId = {
    id : 1,
    count : 20
}

const num = [1,2,3,4,5];
const numTwo = [6,7,8,9,10]

const [one,two,...rest] = numTwo

console.log(one,two,rest)

function run(a,b,...rest){
  
    console.log(a,b,rest)
}

run(...numTwo)

console.log({...num})

const totalNum = [...num,...numTwo]

console.log(totalNum)

const order = {
    ...product,...prodcutId
}
console.log(product)
console.log(prodcutId)
console.log(order)

const info = (name ,age = 23 ,gender) => console.log(name,age,gender)

console.log(info("Bo Than",20,"male"))
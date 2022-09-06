const id = {
    name:"Terry",
    age:19,
    gender: "male"
}

let user = {
    name: 'Mike',
    friend: ["John", "Paul", "Jimmy"],
    location: {
      region:"England",
      country:"United Kingdom"
    },
    aboutMe: {
      status: "Single",
      pet: "Dog",
    }
  }


const {location:{region,country},aboutMe:{status,pet}} = user

console.log(status)
console.log(country)




const num = ["one","two","three"]

const [a,b,c] = num

console.log(a,b,c)



const {name,age,gender} = id;

console.log(name,age    ,gender)
console.log("arrow function")

let name = _ => "Than Htike"

// let age = (x) => x

let obj = {
    name : "than htike",
    age : 24,
    fun : function(){
        return this
    },
    funTwo : () => {
        return this
    }
}

obj.funTwo()

let fun = () =>{
    console.log(this)
}

fun()


console.log(name())
// console.log(age(19))
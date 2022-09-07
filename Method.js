import { data } from "./data.js";

// console.log(data)

let a = data.filter(el=>{
    document.getElementById("list").innerHTML += 
    
    `<li>${el.price}</li>`;
    
    return el.price > 100

}).map(el=>{
    return el.price}).reduce((f,s)=>{ return f+s},0)


    

console.log(a)
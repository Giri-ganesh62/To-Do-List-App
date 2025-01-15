// let fName=["ganesh","aayush"]
// console.log(fName);
// console.log(fName[0]);
// console.log(fName[1]);
// let Num=[1,2,3,4,5,6,9]
// let sum=Num[0]+Num[1];
// console.log(sum);
// console.log(Num.length)
// let fName=["ganesh","aayush"]
// // console.log(fName.toString())
// // fName.pop()
// // console.log(fName)
// fName.push("rohit");
// console.log(fName)
// let Num=[1,2,3,5,6]
// let doubledNum=Num.map(item=> item*2);
// console.log(doubledNum)
// let numb=[1,4,5,6,7,3]
// let evenarr=numb.filter(item=> item%2===0)
// console.log(evenarr)
// let Names=["ganesh","aayush","rohit"]
// // // let nUpper=
// // // let fName="ganesh"
// // // let nUpper=fName.toUpperCase()
// // console.log(nUpper)

// console.log(Names.map(item=> item.toUpperCase())
// let namesarr=names.filter(item =>item.length>4)
// let num=[1,2,3,4,5,6,7,8,9]
// let answe=num.filter(item=> item<5).map(item=>item*2)
// console.log(answe)
// let lan=["python","ganesh","js"]
// let fletter=lan.map(i=> i[0])
// console.log(fletter)
// let numB=[2,-5,6,-9]
// let neG=numB.filter(item=> item<0)
// console.log(neG)
// let newH= document.querySelector("h1")
// console.log(newH.innerHTML=("ganesh"))
// let para=document.querySelector("#para")
// console.log(para)
// console.log(para.innerHTML=("new para"))
// let div=document.querySelector("#para")
// div.classList.add("mydiv")
// let btn=document.querySelector(".btn")
// // console.log(btn)
// // btn.addEventListener("click", function(){
//     console.log("hello")
// })
// let para=document.querySelector("#para")
// btn.addEventListener("click", function (){
//     console.log("thank yoi")
// })
// let btn=document.querySelector(".btn")
// let para=document.querySelector("#para")
// console.log(btn)
// function changecontent(){
//     para.style.backgroundColor="purple"
// }

// btn.addEventListener("mouseover",changecontent)
let todo=document.querySelector(".todo");
let btn=document.querySelector(".btn")
let ul=document.querySelector(".list")
console.log(todo)
console.log(btn)
console.log(ul)
//to get input values
btn.addEventListener("click",function(){
    console.log("")
    let todovalue= todo.value
console.log(todovalue)
let li=document.createElement("li")
let delbtn=document.createElement("button")
li.innerHTML=todovalue
delbtn.innerHTML="delete"
console.log(delbtn)
ul.appendChild(li)

ul.appendChild(delbtn)
delbtn.addEventListener("click",function(){
ul.removeChild(li)
ul.removeChild(delbtn)

})
console.log(li)
})























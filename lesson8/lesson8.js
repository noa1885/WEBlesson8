function func1() {
 num1=Number(document.getElementById("num1").value )
 num2=Number(document.getElementById("num2").value )
const r=num1+num2;
alert(r)
}

function func2() {
    num1=Number(document.getElementById("num1").value )
    num2=Number(document.getElementById("num2").value )
   const r=num1*num2;
   alert(r)

}

function func3() {
    num1=Number(document.getElementById("num1").value )
 num2=Number(document.getElementById("num2").value )
const r=num1**num2;
alert(r)
}

function enter() {
  const  name=(document.getElementById("name").value ) || "vister";
  let num= (document.getElementById("num").value ) || "1234";
  alert("hello to: "+name+"  sisma: "+num)
}
function func4() {
  let num1=  parseInt(Number(document.getElementById("num1").value) , 2)
  let num2=  parseInt(Number(document.getElementById("num2").value) , 2)
  const sum =num1 + num2 ;


  alert( sum.toString(2))
}
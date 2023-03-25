
//fibonacci enunciado matematico
// n = 0 -> 0
// n = 1 -> 1
// n = 2 -> 1 + 0
function fibonacci() {
let a = 0;
let b = 1;
let op
let Count;
let numero = parseInt(prompt('Digite el numero :3'));
if (!numero)return alert("no ingresaste un numero");
for(Count = 1; Count <= numero ; Count ++){
console.log(a);
op = a + b;
a = b;
b = op;

var text = document.createTextNode(`= ${a},`);                                    
document.getElementById("cont4").appendChild(text);

}
document.getElementById("cont4").removeChild(text);
}


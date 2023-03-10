 
 
 async function secondfunction(){
// console.log(localStorage.getItem(song))
    await waitForDOM();

}

window.onload=async function waitForDOM(){
    console.log('here');
let x=document.getElementById("p");
// x.style.backgroundColor="blue";
x.style.height="100vh";
x.style.width="100vw";
console.log('before loop')
for(i=0;i<localStorage.length;i++){
    console.log("after loop")
    let n=document.createElement("a"); 
    console.log('here');
    n.style.height="400px";
    n.style.width="400px"
    n.style.backgroundColor="red";
    x.appendChild(n);
    console.log(localStorage.getItem(`Song-${i}`));
}
}


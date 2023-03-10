

async function secondfunction() {
    // console.log(localStorage.getItem(song))
    await waitForDOM();

}

window.onload = async function waitForDOM() {
    // console.log('here');
    let x = document.getElementById("p");
    console.log(x);
    // x.style.backgroundColor="blue";

    console.log('before loop')
    for (i = 0; i < localStorage.length; i++) {
        console.log("after loop")
        let n = document.createElement("a");
        console.log('here');
        n.style.height = "400px";
        n.style.width = "400px";
        n.style.margin = "20px"
        n.style.backgroundColor = "red";
        let songString=`Song-${i}`;
        console.log(songString);
        n.href=`${localStorage.getItem(songString)}`;
        x.appendChild(n);
        // console.log(localStorage.getItem());
    }
}


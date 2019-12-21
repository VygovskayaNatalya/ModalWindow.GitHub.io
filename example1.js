var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const arr1 = []

for(let i=0; i<100; i++) {
    let tmp = Math.floor(Math.random() * 100)
    arr1.push(tmp)
    console.log(tmp)
}

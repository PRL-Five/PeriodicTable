document.getElementById("intro").style.display = 'none';
document.getElementById("choice").style.display = 'none';
function start() {
    document.getElementById("reset").style.display = 'none';
    document.getElementById("intro").style.display = 'block';
   let x = document.getElementById("inp").value;
   document.getElementById("Next1").innerHTML = `Ready for more, ${x}?`
}
function start2() {
    document.getElementById("choice").style.display = 'block';
    document.getElementById("intro").style.display = 'none';
}

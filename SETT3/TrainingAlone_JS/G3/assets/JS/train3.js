//ESORCICCIOOOO

console.log('*Evento mouseOver/Out*');
function mouseOver() {
    document.getElementById("demo").style.color = "red";
  }
function mouseOut() {
    document.getElementById("demo").style.color = "black";
  }

  console.log('*Evento onkeydown/up*');
function keydownFunction() {
    document.getElementById("demo1").style.backgroundColor = "red";
} 
function keyupFunction() {
    document.getElementById("demo1").style.backgroundColor = "green";
}

console.log('*Evento onchange*');
function myFunction1() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo2").innerHTML = "You selected: " + x;
  }

console.log('*Evento onsubmit*');
function myFunction2() {
    alert("The form was submitted");
  }

console.log('*Evento onload*');
function myFunction() {
    alert("Page is loaded");
}

console.log('*Evento input*');
input.oninput = function() {
    result.innerHTML = input.value;
};

//assegna ad un elemento selezionato un certo evento
console.log('*Add Event Listener*');
const element = document.getElementById("myBtn");
element.addEventListener("click", function() {
document.getElementById("demo3").innerHTML = "Hello World!";
});

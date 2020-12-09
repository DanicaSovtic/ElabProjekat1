var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
function pozicija() {
    var broj = document.getElementById("pozicija");
      var items = Array('primac','tehnicar','libero','srednjak','korektor','pucac');
      var item = items[Math.floor(Math.random() * items.length)];
      
      broj.innerHTML = 'Tvoja najbolja pozicija u timu bi bila: ' + item;
    };

function openWin() {
    myWindow = window.open("form.html", "myWindow", "width=1500,height=1000");
  }
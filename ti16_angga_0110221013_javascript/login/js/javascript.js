function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    if (username == "12345" && password == "12345") {
      window.open("./secpage.html")
    } else {
      alert(`Account Not Found`);
    }
  }
  
  var kedipan = 1000; 
var login = setInterval(function () {
    var ele = document.getElementById('textkedip');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, kedipan);
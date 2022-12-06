function submit1() {
  document.querySelector(".popup").style.display = "block";
}

function closebtn() {
  document.querySelector(".popup").style.display = "none";
  var username = document.getElementById("username").value;
  document.getElementById("data").innerHTML = username;
  var email = document.getElementById("email").value;
  document.querySelector(".email-show").innerHTML = email;
  var password = document.getElementById("password").value;
  document.querySelector(".password-show").innerHTML = password;
  document.querySelector("#your-data").style.display = "block";
}

// document.getElementById("button").addEventListener("click",function(){
//     document.querySelector(".popup").style.display = "block";
// })

// document.getElementById("close").addEventListener("click",function(){
//     document.querySelector("#form").style.display = "none";
// })

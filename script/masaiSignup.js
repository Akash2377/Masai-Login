document.querySelector("form").addEventListener("submit", addUser);

var userData = JSON.parse(localStorage.getItem("users")) || [];

function addUser(e) {
  e.preventDefault();
  var userEmail1 = document.getElementById("userEmail").value;
  var userMobile1 = document.getElementById("userMobile").value;
  var userPassword1 = document.getElementById("userPassword").value;
  if (userEmail1 != "" && userMobile1 != "" && userPassword1 != "") {
    var user = {
      email: userEmail1,
      mobileNo: userMobile1,
      password: userPassword1,
    };

    var ud = JSON.parse(localStorage.getItem("users")) || [];

    var flag = ud.filter(function (el) {
      return el.email == userEmail1;
    });
    if (flag.length >= 1) {
      alert("User Already Sign Up");
    } else {
      userData.push(user);
      localStorage.setItem("users", JSON.stringify(userData));
      userEmail.value = "";
      userMobile.value = "";
      userPassword.value = "";
      alert("Sign Up successfully");
    }
  } else {
    alert("Please Fill All Information");
  }
}
function myFunction() {
  var x = document.getElementById("userPassword");
  var y = document.getElementById("eye");
  if (x.type === "password") {
    x.type = "text";
    y.src = "./img/eye-solid.svg";
  } else {
    x.type = "password";
    y.src = "./img/eye-slash-solid.svg";
  }
}

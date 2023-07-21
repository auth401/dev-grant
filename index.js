var pwd = document.getElementById("pwd");
var eye = document.getElementById("eye");

eye.addEventListener("click", togglePass);

function togglePass() {
  eye.classList.toggle("active");
  console.log("t");

  pwd.type == "password" ? (pwd.type = "text") : (pwd.type = "password");
}

// Form Validation

function login(event) {
  event.preventDefault();
  const result = checkDetails();
  console.log(result);
  if (result.isCorrect) {
    checkAuth(result.username, result.password, result.pin);
  }
}

function checkDetails() {
  var username = document.form1.username.value;
  var password = document.form1.password.value;
  var pin = document.form1.pin.value;
  var msg = document.getElementById("msg");

  let isCorrect;

  if (!username) {
    msg.style.display = "block";
    msg.innerHTML = "Please enter your batch number";
    username.focus();
    return false;
  } else {
    msg.style.display = "none";
    msg.innerHTML = "";
  }

  if (!password) {
    msg.style.display = "block";
    msg.innerHTML = "Please enter your serial number";
    password.focus();
    return false;
  } else {
    msg.style.display = "none";
    msg.innerHTML = "";
  }

  if (!pin) {
    msg.style.display = "block";
    msg.innerHTML = "Please enter your pin";
    pin.focus();
    return false;
  } else {
    msg.style.display = "none";
    msg.innerHTML = "";
  }

  if (username && password && pin) {
    isCorrect = true;
  }

  return { isCorrect, username, password, pin };
}

function checkAuth(username, password, pin) {
  var msg = document.getElementById("msg");
  if (
    (username == "0281544G" && password == "993527482023" && pin == "4087") ||
    (username == "user2" && password == "password2" && pin == "#071990J") 
  ) {
    console.log("logging in...");
    window.location.assign("profile.html");
  } else {
    msg.style.display = "block";
    msg.innerHTML = "Invalid Login Details";
  }
  
}

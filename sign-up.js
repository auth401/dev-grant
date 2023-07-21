var fname = document.getElementById("fname");
var lname = document.getElementById("lname");



// Form Validation

function login(event) {
  event.preventDefault();
  const result = checkDetails();
  console.log(result);
  if (result.isCorrect) {
    checkAuth(result.fname, result.lname, result.email);
  }
}

function checkDetails() {
  var fname = document.gform.fname.value;
  var lname = document.gform.lname.value;
  var email = document.gform.email.value;
  var msg = document.getElementById("msg");

  let isCorrect;

  if (!fname) {
    msg.style.display = "block";
    msg.innerHTML = "Please enter your batch number";
    fname.focus();
    return false;
  } else {
    msg.style.display = "none";
    msg.innerHTML = "";
  }

  if (!lname) {
    msg.style.display = "block";
    msg.innerHTML = "Please enter your serial number";
    lname.focus();
    return false;
  } else {
    msg.style.display = "none";
    msg.innerHTML = "";
  }

  if (!email) {
    msg.style.display = "block";
    msg.innerHTML = "Please enter your email";
    email.focus();
    return false;
  } else {
    msg.style.display = "none";
    msg.innerHTML = "";
  }

  if (fname && lname && email) {
    isCorrect = true;
  }

  return { isCorrect, fname, lname, email };
}

function regSubBut() {
	var error = document.getElementById("errorInformer");
    var email = document.getElementById("email");
	var emailFilter #^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})#; 
	if (document.getElementById("name").value === "") 
  {
	  
	error.innerHTML = "Please enter a name";
    document.getElementById("name").focus();
    return false;
  } 
else if (email === "" || !emailFilter.test(email.value))
  { 

    error.innerHTML = "Please enter a valid email";
	email.focus(); 
	return false; 
  } 
  
else if (document.getElementById("password").value === "" || document.getElementById("confirmpassword").value === "") 
 { 
  
    error.innerHTML = "Please enter a password"; 
	document.getElementById("password").focus();
	return false;
  } 

else  { 
      
	  return true; 
	  var frm = document.getElementById("registerform");
	  frm.action = "Homepage.html"; 
	  frm.submit();
	  document.getElementById("welcomebutton").style.display = "block"; 
  } 
  }

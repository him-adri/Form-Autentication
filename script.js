const resetSignupFields = () => {
  document.getElementById("signup-first-name").value = "";
  document.getElementById("signup-last-name").value = "";
  document.getElementById("signup-phone").value = "";
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
  document.getElementById("signup-confirm-password").value = "";
};

let firstname = document.getElementById("signup-first-name").value;
let lastName = document.getElementById("signup-last-name").value;
let email = document.getElementById("signup-email").value;
let phoneNumber = document.getElementById("signup-phone").value;
let password = document.getElementById("signup-password").value;
let confirmPassword = document.getElementById("signup-confirm-password").value;
let signupSuccess = document.getElementById("signup-alert-success");

const signup = () => {
  let firstname = document.getElementById("signup-first-name").value;
  let lastName = document.getElementById("signup-last-name").value;
  let email = document.getElementById("signup-email").value;
  let phoneNumber = document.getElementById("signup-phone").value;
  let password = document.getElementById("signup-password").value;
  let confirmPassword = document.getElementById(
    "signup-confirm-password"
  ).value;
  let signupSuccess = document.getElementById("signup-alert-success");

  if (firstname.length >= 2) {
    document.getElementById("valid-fname").style.display = "block";
    document.getElementById("invalid-fname").style.display = "none";
  } else {
    document.getElementById("invalid-fname").style.display = "block";
    document.getElementById("valid-fname").style.display = "none";
  }
  if (lastName.length >= 2) {
    document.getElementById("valid-lname").style.display = "block";
    document.getElementById("invalid-lname").style.display = "none";
  } else {
    document.getElementById("invalid-lname").style.display = "block";
    document.getElementById("valid-lname").style.display = "none";
  }
  const regx = /^([a-zA-Z0-9])+@(gmail)+.(com)+$/;
  if (email.match(regx)) {
    document.getElementById("valid-email").style.display = "block";
    document.getElementById("invalid-email").style.display = "none";
  } else {
    document.getElementById("invalid-email").style.display = "block";
    document.getElementById("valid-email").style.display = "none";
  }
  if (phoneNumber.length == 10) {
    document.getElementById("valid-phno").style.display = "block";
    document.getElementById("invalid-phno").style.display = "none";
  } else {
    document.getElementById("invalid-phno").style.display = "block";
    document.getElementById("valid-phno").style.display = "none";
  }
  const passwordCheck = /^[A-Za-z]\w{7,14}$/;
  if (password.match(passwordCheck)) {
    document.getElementById("valid-password").style.display = "block";
    document.getElementById("invalid-password").style.display = "none";
  } else {
    document.getElementById("invalid-password").style.display = "block";
    document.getElementById("valid-password").style.display = "none";
  }
  if (password == confirmPassword) {
    document.getElementById("valid-cpassword").style.display = "block";
    document.getElementById("invalid-cpassword").style.display = "none";
  } else {
    document.getElementById("invalid-cpassword").style.display = "block";
    document.getElementById("valid-cpassword").style.display = "none";
  }
  signupSuccess.style.display("block");
};

const signupValidation = () => {
  // alert("Success")
  let firstname = document.getElementById("signup-first-name").value;
  let lastName = document.getElementById("signup-last-name").value;
  let email = document.getElementById("signup-email").value;
  let phoneNumber = document.getElementById("signup-phone").value;
  let password = document.getElementById("signup-password").value;
  let confirmPassword = document.getElementById(
    "signup-confirm-password"
  ).value;
  if (
    firstname == "" ||
    firstname == null ||
    lastName == "" ||
    lastName == null ||
    email == "" ||
    email == null ||
    phoneNumber == "" ||
    phoneNumber == null ||
    password == "" ||
    password == null ||
    confirmPassword == "" ||
    confirmPassword == null
  )
    alert("Unsucessfull Signup.");
  else {
    alert("Signup Successfull.");
  }
  
  resetSignupFields();

};

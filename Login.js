function login() {
  const number = document.getElementById("number").value;
  const password = document.getElementById("password").value;
  if (number==''||password=='') {
    alert("StudentId and Password should not be empty.");
  }
  else if(number.length!= 12){
      alert("Studentid should be 12 numbers");
  }
  else if(!password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/[0-9]/) || !password.match(/[!@#$%^&*]/)){
      alert("Enter Strong Password");
  }
  else{
      alert("Login Successful");
  }
};
  
function signup() {
    const nameInput = document.getElementById("name").value;
    const ageInput = document.getElementById("age").value;
    const phoneInput = document.getElementById("phonenumber").value;
    const emailInput = document.getElementById("email").value;
    const cgpaInput = document.getElementById("cgpa").value;
    const passwordInput = document.getElementById("password").value;
    const cpasswordInput = document.getElementById("cpassword").value;

    if (nameInput=='' || ageInput=='' || phoneInput=='' || emailInput=='' || cgpaInput=='' || passwordInput=='' || cpasswordInput=='') {
      alert("All fields are required.");
    }
    else if (ageInput < 18) {
      alert("Age should be greater than 17.");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailRegex.test(emailInput)) {
      alert("Invalid email format.");
    }
    else if (passwordInput.length < 8) {
      alert("Password should be at least 8 characters long.");
    }
    else if (passwordInput !== cpasswordInput) {
      alert("Passwords do not match.");
    }
    else{
        alert("Signup Successful")
    }
  
  }
  
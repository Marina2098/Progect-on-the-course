console.log('Helo students');
function validate() {
   let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

   if (username == "" || password == "") {
    alert("Please fill in all fields");
   } else if (username == "user" && password == "password") {
    alert("Login successful");
   } else {
    alert("Incorrect username or password");
   }
  }
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const loader = document.getElementById("loader");
  const button = document.getElementById("loginBtn");

  loader.style.display = "block";
  button.disabled = true;

  setTimeout(() => { 
    
    if ((user === "jay" && pass === "1234") || (user === "mark" && pass === "markpogi")) {
      localStorage.setItem("user", user);

      // window.location.href = "dashboard/dashboard.html";
      window.location.href = "../login/dashboard/Home/index.html";


    } else {
      alert("Invalid credentials. Please try again.");
      loader.style.display = "none";
      button.disabled = false;
    }
  }, 1500); // 1.5 seconds loading
}





function togglePassword() {
  const passwordField = document.getElementById("password");
  const icon = document.querySelector(".toggle-password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

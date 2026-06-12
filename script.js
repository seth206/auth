// SIGNUP
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").onsubmit = function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem(username, password);

    alert("Account created!");
    window.location = "login.html";
  };
}

// LOGIN
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const savedPassword = localStorage.getItem(username);

    if (savedPassword === password) {
      localStorage.setItem("loggedInUser", username);
      window.location = "dashboard.html";
    } else {
      alert("Wrong login");
    }
  };
}

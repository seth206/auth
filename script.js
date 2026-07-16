// SIGNUP
// Fixed: Converts username to lowercase when saving to ensure invitations don't break over capital letters.
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").onsubmit = function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username) return alert("Please enter a username");

    // Check if user already exists
    if (localStorage.getItem(username.toLowerCase())) {
      alert("Username already exists!");
      return;
    }

    // Save using lowercase key to prevent case sensitivity bugs
    localStorage.setItem(username.toLowerCase(), password);

    alert("Account created!");
    window.location = "login.html";
  };
}

// LOGIN
// Fixed: Updated selector to match "loginform" from your HTML file
if (document.getElementById("loginform")) {
  document.getElementById("loginform").onsubmit = function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Look up the lowercase version of the username
    const savedPassword = localStorage.getItem(username.toLowerCase());

    if (savedPassword && savedPassword === password) {
      // Store the exact casing they typed for the display name greeting
      localStorage.setItem("loggedInUser", username);
      window.location = "dashboard.html";
    } else {
      alert("Wrong login");
    }
  };
}

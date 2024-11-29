document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple authentication (for demonstration purposes only)
    if (username === "user" && password === "password") {
        document.getElementById("loginMessage").innerHTML = "<div style='color: green;'>Login successful!</div>";
    } else {
        document.getElementById("loginMessage").innerHTML = "<div style='color: red;'>Invalid username or password.</div>";
    }
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !email || password.length < 6) {
    alert("Please fill all fields correctly.");
    return;
  }

  document.cookie = `user=${username}; path=/; max-age=86400`; // 1 day
  alert("Registration successful!");
});

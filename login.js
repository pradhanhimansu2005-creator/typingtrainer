document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const rollNumber = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const password = form.querySelector("input[type='password']").value;
  
      if (!rollNumber || !email || !password) {
        alert("Please fill in all the fields.");
        return;
      }
  
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      alert("Login successful (demo only)!");
    });
  });
  
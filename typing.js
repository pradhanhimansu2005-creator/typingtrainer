document.addEventListener("DOMContentLoaded", () => {
    const studentBtn = document.getElementById("studentBtn");
    const adminBtn = document.getElementById("adminBtn");
  
    studentBtn.addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "typing1.html";
      }, 300);
    });
  
    adminBtn.addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "typing2.html";
      }, 300);
    });
  });
  
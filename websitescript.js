document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".Application");
    const usernameElement = document.getElementById("name");
    const storedUsername = localStorage.getItem("username");
    usernameElement.textContent = storedUsername || "Username";
    form.addEventListener("submit", function (event) {
      const nameInput = document.getElementById("name");
      const validName = document.getElementById("validName");
      validName.textContent = "";
      if (!nameInput.value.trim()) {
        event.preventDefault(); 
        validName.textContent = "Please enter your name.";
      } else {
        localStorage.setItem("username", nameInput.value);
        usernameElement.textContent = nameInput.value;
      }
    });
  });

  //code above saves the username
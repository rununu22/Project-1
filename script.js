document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the value of the first name input field
    var firstName = document.getElementById("firstName").value;
    
    // Display the confirmation message with the first name
    document.getElementById("firstNameDisplay").textContent = firstName;
    document.getElementById("confirmationMessage").style.display = "block";
    
    // Optional: You can reset the form fields after submission
    document.getElementById("contactForm").reset();
  });

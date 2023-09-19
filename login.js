// Function to validate the form
function validateForm() {
  
    var studentId = document.getElementById("studentId").value;
    var password = document.getElementById("password").value;
    

    // Check if any of the required fields are empty
    if (studentId === "" || password === "" ) {
        alert("Student ID and password is required");
        return false;
    }

    

    // Validate student id  to  be 5 digits
    if (studentId.length != 5) {
        alert("Student ID should be 5 digits.");
        return false;
    }

    return true; // Form is valid and can be submitted
}

// Attach the validation function to the form's submit event
document.querySelector("form").addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

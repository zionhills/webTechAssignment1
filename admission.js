// Function to validate the form
function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Check if any of the required fields are empty
    if (firstName === "" || lastName === "" || email === "" || phoneNumber === "" || studentId === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    // Validate email using a regular expression
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate phone number to be 10 digits
    if (phoneNumber.length != 10) {
        alert("Phone number should be 10 digits.");
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

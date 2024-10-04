// Function to validate form fields
function validateForm() {
    // Get all the form values
    const name = document.forms["feedbackForm"]["Name"].value;
    const email = document.forms["feedbackForm"]["Email"].value;
    const q1 = document.forms["feedbackForm"]["Q1"].value;
    const q2 = document.forms["feedbackForm"]["Q2"].value;
    const q3 = document.forms["feedbackForm"]["Q3"].value;
    const q4 = document.forms["feedbackForm"]["Q4"].value;
    const q5 = document.forms["feedbackForm"]["Q5"].value;
    const q6 = document.forms["feedbackForm"]["Q6"].value;
    const q7 = document.forms["feedbackForm"]["Q7"].value;
    const q8 = document.forms["feedbackForm"]["Q8"].value;
    const q9 = document.forms["feedbackForm"]["Q9"].value;
    const q10 = document.forms["feedbackForm"]["Q10"].value;
    const q11 = document.forms["feedbackForm"]["Q11"].value;
    const q12 = document.forms["feedbackForm"]["Q12"].value;
    const q13 = document.forms["feedbackForm"]["Q13"].value;

    // Collect error messages
    let errorMessage = "";

    // Validate required fields
    if (!name || !email || !q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 ||!q9||!q10||!q11||!q12||!q13) {
        // Add an error image and message
        errorMessage += "<img src='https://static.thenounproject.com/png/145314-200.png' alt='Error Image' width='40' height='45' align='center'>";
        errorMessage += "Error!<br>";
    }
    if (!name) errorMessage += "Please enter your full name<br>";
    if (name && !email) errorMessage += "Please enter your email id<br>";
    if (name && email && !q1) errorMessage += "Please answer Question 1<br>";
    if (name && email && q1 && !q2) errorMessage += "Please answer Question 2<br>";
    if (name && email && q1 && q2 && !q3) errorMessage += "Please answer Question 3<br>";
    if (name && email && q1 && q2 && q3 && !q4) errorMessage += "Please answer Question 4<br>";
    if (name && email && q1 && q2 && q3 && q4 && !q5) errorMessage += "Please answer Question 5<br>";
    if (name && email && q1 && q2 && q3 && q4 && q5 && !q6) errorMessage += "Please answer Question 6<br>";
    if (name && email && q1 && q2 && q3 && q4 && q5 && q6 && !q7) errorMessage += "Please answer Question 7<br>";
    if (name && email && q1 && q2 && q3 && q4 && q5 && q6 && q7 && !q8) errorMessage += "Please answer Question 8<br>";
    if (name && email && q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && !q9) errorMessage += "Please answer Question 9.<br>";
    if (name && email && q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && !q10) errorMessage += "Please answer Question 10.<br>";
    if (name && email && q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10 && !q11) errorMessage += "Please answer Question 11.<br>";
    if (name && email && q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10 && q11 && !q12) errorMessage += "Please answer Question 12.<br>";
    if (name && email && q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10 && q11 && q12 && !q13) errorMessage += "Please answer Question 13.<br>";

    // If there are any errors, show the modal and return false to prevent form submission
    if (errorMessage) {
        document.getElementById('modalMessage').innerHTML = errorMessage; // Set the error messages in the modal
        document.getElementById('errorModal').style.display = "block"; // Show the modal
        return false;  // Validation failed, return false
    }

    return true;  // Validation passed, return true
}

// Close the modal when the close button (x) is clicked
document.querySelector(".close-button").addEventListener("click", function () {
    document.getElementById('errorModal').style.display = "none"; // Hide the modal
});

// Close the modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('errorModal');
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
    }
};

// Attach the form submission logic and validation
window.onload = function () {
    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent the default form submission

        // Perform form validation
        if (!validateForm()) {
            return;  // If the form validation fails, prevent submission
        }

        // Show the loading overlay if validation passes
        document.getElementById("loadingOverlay").style.display = "flex";

        // Perform form submission (via fetch or AJAX)
        var form = this;
        var formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    // Redirect to the success page
                    window.location.href = "Form_submit.html";  // Change to your desired page
                } else {
                    alert("There was an error with your submission.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Submission failed. Please try again.");
            })
            .finally(() => {
                // Hide the loading overlay after the submission is complete or an error occurs
                document.getElementById("loadingOverlay").style.display = "none";
            });
    });
};
// Handle form submission
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Check if username and password are provided
    if (document.querySelector("input[name=username]").value && document.querySelector("input[name=password]").value) {
        // Redirect to a different page or show a message indicating successful login
        alert("Login successful!");
    }
});

// Show/hide social media login options
document.querySelector(".forgot-password").addEventListener("click", function(event) {
    event.preventDefault();

    // Toggle the 'social-media-box' visibility
    document.querySelector(".social-media-box").classList.toggle("visible");
});

// Add a class to hide the 'social-media-box' when clicking outside the area
document.addEventListener("click", function(event) {
    const socialMediaBox = document.querySelector(".social-media-box");
    if (event.target != socialMediaBox && event.target.parentNode != socialMediaBox) {
        socialMediaBox.classList.remove("visible");
    }
});
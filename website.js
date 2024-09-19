document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name === "" || email === "") {
        alert("Please fill in both your name and email.");
    } else {
        alert(`Thank you, ${name}! We will contact you at ${email}.`);
        document.getElementById('contactForm').reset(); // Reset the form fields
    }
});

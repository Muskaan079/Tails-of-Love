// Mobile Navigation Toggle
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');

navbar.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Placeholder for more interactivity, e.g., form handling
document.getElementById('report-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('animal-name').value;
    const location = document.getElementById('animal-location').value;
    const image = document.getElementById('animal-image').files[0];

    if (name && location && image) {
        alert(`Stray animal ${name} reported at ${location}. Image uploaded successfully!`);
    } else {
        alert('Please fill all fields and upload an image.');
    }
});

// Creating a "scroll to top" button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = 'Top';
scrollToTopBtn.id = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

// Styling the button
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.display = 'none';

// Show/Hide button based on scroll position
window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Smooth scroll to top on button click
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Display a welcome alert on page load
window.addEventListener('load', function () {
    alert('Mire se vini ne website-n e restorantit tone');
});

// Form validation and submission handling
const form = document.querySelector('.form-container form'); // Ensure the form is targeted correctly
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert("Ju lutem plotesoni te gjitha te dhenat");
        } else {
            alert("Mesazhi juaj eshte derguar me sukses;");
            // Here you can handle form submission, e.g., sending the data via AJAX
        }
    });
}

// Email validation
const emailInput = document.querySelector('input[type="email"]');
if (emailInput) {
    emailInput.addEventListener('input', function () {
        const email = this.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        this.style.borderColor = isValid ? 'green' : 'red';
    });
}

// Textarea validation
const textarea = document.querySelector('textarea');
if (textarea) {
    textarea.addEventListener('input', function () {
        this.style.borderColor = this.value.length > 0 ? 'green' : 'red';
    });
}
  
//per te ndryshuar ngjyrat e backround

// Define sections variable
const sections = document.querySelectorAll('section');

// Function to change the background color of sections based on viewport visibility
function changeSectionBackground() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.backgroundColor = getRandomColor(); // Corrected the typo here
        }
    });
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add scroll event listener to call changeSectionBackground on scroll
window.addEventListener('scroll', changeSectionBackground);

// Call changeSectionBackground initially to apply colors on load
changeSectionBackground();

// Function to scroll to the clicked section
const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Event listener to trigger the buttons
document.querySelectorAll('.buttons').forEach(button => {
    button.addEventListener('click', () => {
        // Extract section ID from the data-section attribute
        const sectionId = button.getAttribute('data-section');
        scrollToSection(sectionId);
    });
});
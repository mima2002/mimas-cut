 // Select all buttons and anchor tags with the respective classes
    const buttons = document.querySelectorAll('.action-button');
    const links = document.querySelectorAll('.action-link');
    const spinner = document.getElementById('loadingSpinner');

// Function to handle the loading state
// Function to handle the loading state
// Function to handle the loading state
function handleClick(event) {
  event.preventDefault();  // Prevent the default action (navigation for links)

  // Show the spinner (start loading)
  spinner.classList.remove('hidden');
  
  // Disable all buttons and links to prevent multiple clicks
  buttons.forEach(button => button.disabled = true);
  links.forEach(link => link.classList.add('cursor-not-allowed', 'opacity-50'));

  // Store the clicked element in a variable (targetLink for links)
  const targetLink = event.target.closest('a'); // Get the closest anchor tag

  // Simulate a delay (e.g., 2 seconds)
  setTimeout(() => {
    // Hide the spinner after the delay (loading is finished)
    spinner.classList.add('hidden');
    
    // Re-enable buttons and links
    buttons.forEach(button => button.disabled = false);
    links.forEach(link => link.classList.remove('cursor-not-allowed', 'opacity-50'));

    // If it's a link, replace the current page with the target link
    if (targetLink && targetLink.href) {
      // Optional: Add a smooth transition before navigating
      document.body.classList.add('fade-out'); // Add fade-out class to body

      // Wait for the fade-out effect to complete before navigating
      setTimeout(() => {
        window.location.replace(targetLink.href);  // Navigate to the link
      }, 500); // Adjust the delay based on fade-out animation time
    }
  }, 2000); // 2-second delay
}

// Attach the event listener to all buttons and links
buttons.forEach(button => button.addEventListener('click', handleClick));
links.forEach(link => link.addEventListener('click', handleClick));

// Add fade-out animation in CSS
// Example CSS for fade-out effect
const style = document.createElement('style');
style.innerHTML = `
  body.fade-out {
    opacity: 0;
    transition: opacity 0s ease-out;
    background-color: black;
    color: black;
  }
`;
document.head.appendChild(style);

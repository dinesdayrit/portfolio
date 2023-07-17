// // Get a reference to all the sections with class "section"
// const sections = document.querySelectorAll('.section');

// // Create and append pop-up elements to each section
// sections.forEach(section => {
//   const popup = document.createElement('div');
//   popup.className = 'popup';
//   popup.innerHTML = '<h3>Pop-up Content</h3><p>This is the content of the pop-up.</p>';
//   section.appendChild(popup);
// });

// // Function to check the visibility of each pop-up
// function checkPopupVisibility() {
//   sections.forEach(section => {
//     const popup = section.querySelector('.popup');
//     const rect = section.getBoundingClientRect();

//     if (rect.top < window.innerHeight && rect.bottom >= 0) {
//       popup.classList.add('active');
//     } else {
//       popup.classList.remove('active');
//     }
//   });
// }

// // Attach the scroll event listener to the window
// window.addEventListener('scroll', checkPopupVisibility);

// // Initial check to show pop-ups based on the initial scroll position
// checkPopupVisibility();
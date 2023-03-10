// Define a function called displayList using arrow function syntax
const displayList = () => {
  // Select all elements with class of section and loop through them
  document.querySelectorAll('.section').forEach((section) => {
    // If the section does not have an id of 'book-list', hide it
    if (!(section.id === 'book-list')) section.style.display = 'none';
  });

  // Select the element with a class of navBar
  const navBar = document.querySelector('.navBar');
  // Add a click event listener to the navBar element
  navBar.addEventListener('click', (e) => {
    // Check if the clicked element has a class of navLink
    if (e.target.classList.contains('navLink')) {
      // Get the id of the clicked section from the anchor tag href attribute
      const anchorHref = e.target.href.split('#')[1];
      // Loop through all sections and display the one with the matching id, hide the others
      document.querySelectorAll('.section').forEach((section) => {
        if (section.id === anchorHref) section.style.display = 'flex';
        else section.style.display = 'none';
      });
    }
  });
};

// Export the displayList function as the default export of the module
export default displayList;

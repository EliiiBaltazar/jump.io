document.querySelectorAll('.animated-text span').forEach(item => {
  item.addEventListener('mouseover', () => {
      // You can manipulate the element directly or add classes.
      // For example, add a class to change style or initiate animations.
      item.style.color = '#FF69B4'; // Example of direct manipulation
  });

  item.addEventListener('mouseout', () => {
      // Reset styles on mouse out, if needed.
      item.style.color = ''; // Remove inline style to revert to original
  });
});

const letters = document.querySelectorAll('#_letters .letter');

letters.forEach((letter) => {
  letter.addEventListener('click', () => {
    letter.classList.toggle('active');
  });
});
// Get the "Read More" links
const readMoreLinks = document.querySelectorAll('.read-more');

// Loop through the links and add click event listeners
readMoreLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the link from following its href
    event.preventDefault();
    // Get the corresponding article element
    const article = link.closest('article');
    // Toggle the "show-more" class on the article element
    article.classList.toggle('show-more');
    // Change the link text depending on whether the article is expanded or collapsed
    if (article.classList.contains('show-more')) {
      link.textContent = 'Read Less';
    } else {
      link.textContent = 'Read More';
    }
  });
});

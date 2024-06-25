// Add an event listener for scrolling
window.addEventListener('scroll', function() {
    // Get all the section headings
    const sectionHeadings = document.querySelectorAll('.scroll-item > h2');
    
    // Find the current active section based on scroll position
    let activeSection = '';
    sectionHeadings.forEach((heading) => {
        const bounding = heading.getBoundingClientRect();
        if (bounding.top <= 100 && bounding.bottom > 100) {
            activeSection = heading.id;
        }
    });
    
    // Highlight the active filter button
    const activeFilterBtn = document.querySelector('.filter-btn.active-filter');
    if (activeFilterBtn) {
        activeFilterBtn.classList.remove('active-filter');
    }
    const targetFilterBtn = document.querySelector(`.filter-btn[data-filter="${activeSection}"]`);
    if (targetFilterBtn) {
        targetFilterBtn.classList.add('active-filter');
    }
});

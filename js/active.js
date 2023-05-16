// Smooth scrolling for browsers that don't support CSS smooth scrolling
if (window.getComputedStyle(document.documentElement).scrollBehavior !== 'smooth') {
    document.querySelectorAll('a[href^="#"]').forEach(internalLink => {
        const targetElement = document.querySelector(internalLink.getAttribute('href'));
        if (targetElement) {
            internalLink.addEventListener('click', (e) => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                });
                e.preventDefault();
            });
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});
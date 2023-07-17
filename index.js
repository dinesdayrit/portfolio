function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('is-visible'); // Remove the 'is-visible' class when the section is not intersecting
      }
    });
  }
  
  const sections = document.querySelectorAll('.section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25, // Adjust this value to control when the animation starts
  };
  
  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  // Re-observe sections when scrolling back to the top of the page
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop === 0) {
      sections.forEach((section) => {
        observer.observe(section);
      });
    }
  });
  
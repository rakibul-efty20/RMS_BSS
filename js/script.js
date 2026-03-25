// Mobile Menu
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  // Sticky Navbar Background on Scroll
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
 
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scroll');
    } else {
      navbar.classList.remove('navbar--scroll');
    }
  });


// Event Listeners for Buttons
nextBtn.addEventListener('click', () => {
  moveNext();
  resetAutoPlay(); // Reset timer if user clicks
});

prevBtn.addEventListener('click', () => {
  movePrev();
  resetAutoPlay(); // Reset timer if user clicks
});

// Autoplay Logic
function startAutoPlay() {
  autoPlayInterval = setInterval(moveNext, autoPlaySpeed);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// Start Autoplay when the page loads
startAutoPlay();

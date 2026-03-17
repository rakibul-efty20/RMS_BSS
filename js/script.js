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

  // =========================================
// Popular Food Carousel
// =========================================
const track = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Variables for Autoplay
let autoPlayInterval;
const autoPlaySpeed = 3000; // Slides every 3 seconds

// Move to the Next Slide
function moveNext() {
  const cards = document.querySelectorAll('.popular__card');
  const cardWidth = cards[0].offsetWidth;
  // Get the gap size from CSS (2rem = roughly 32px)
  const gap = parseFloat(getComputedStyle(track).gap); 
  const moveDistance = cardWidth + gap;

  // 1. Add smooth transition and slide the track to the left
  track.style.transition = 'transform 0.4s ease-in-out';
  track.style.transform = `translateX(-${moveDistance}px)`;

  // 2. Wait for the slide animation to finish
  track.addEventListener('transitionend', function handleTransition() {
    // Remove this event listener so it doesn't fire multiple times
    track.removeEventListener('transitionend', handleTransition);
    
    // 3. Remove the animation temporarily
    track.style.transition = 'none';
    
    // 4. Take the first card and move it to the very end of the HTML list
    track.appendChild(track.firstElementChild);
    
    // 5. Instantly snap the track back to the 0 position (invisible to the user)
    track.style.transform = 'translateX(0)';
  });
}

// Move to the Previous Slide
function movePrev() {
  const cards = document.querySelectorAll('.popular__card');
  const cardWidth = cards[0].offsetWidth;
  const gap = parseFloat(getComputedStyle(track).gap);
  const moveDistance = cardWidth + gap;

  // 1. Turn off transition
  track.style.transition = 'none';
  
  // 2. Take the very last card and move it to the very front of the HTML list
  track.prepend(track.lastElementChild);
  
  // 3. Instantly shift the track to the left so it looks like nothing changed yet
  track.style.transform = `translateX(-${moveDistance}px)`;
  
  // 4. Force the browser to register the shift (Reflow)
  track.offsetHeight; 
  
  // 5. Turn transition back on and slide the track to the 0 position
  track.style.transition = 'transform 0.4s ease-in-out';
  track.style.transform = 'translateX(0)';
}

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

// Optional: Pause carousel when mouse hovers over it
const carouselContainer = document.querySelector('.popular__carousel');
carouselContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
carouselContainer.addEventListener('mouseleave', startAutoPlay);
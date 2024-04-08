// Function to scroll to the top of the screen on page load or refresh
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Call the function when the page loads or refreshes
window.addEventListener('load', scrollToTop);

// Sticky navigation
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  if (window.scrollY > 0) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }    

  // Check the position of the "projects" section relative to the viewport
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
      const distanceToTop = projectsSection.getBoundingClientRect().top;
      if (distanceToTop <= window.innerHeight * 0.2) {
          document.body.style.transition = 'background-image 1s ease'; // Smooth transition
          document.body.style.backgroundImage = "url('css/imgs/secondwall.jpg')"; // Change to project background image
      } else {
          document.body.style.transition = 'background-image 0.5s ease'; // Smooth transition
          document.body.style.backgroundImage = "url('css/imgs/starrynights.jpg')"; // Revert to default background image
      }
  }
});

// Function to scroll to a specific section when a navigation link is clicked
function scrollToSection(sectionId) {
const section = document.getElementById(sectionId);
if (section) {
  section.scrollIntoView({ behavior: 'smooth' });
}
}

// Add event listeners to navigation links
document.addEventListener('DOMContentLoaded', function() {
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const sectionId = this.getAttribute('href').substring(1); // Get section ID from href
    scrollToSection(sectionId);
  });
});
});

// Add event listener for scroll event
document.addEventListener("DOMContentLoaded", function() {
window.addEventListener("scroll", scrollHandler);
});

// Function to handle scroll event
function scrollHandler() {
var contactSection = document.getElementById("contact");
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (contactSection && (scrollTop >= contactSection.offsetTop - window.innerHeight * 0.69)) {
    // Scroll position reached contact section
    triggerBrokenWebsite();
    window.removeEventListener("scroll", scrollHandler); // Remove scroll event listener
}
}

// Function to trigger the broken website section
function triggerBrokenWebsite() {
var brokenWebsite = document.getElementById("broken-website");
if (brokenWebsite) {
    brokenWebsite.style.display = "block";
}
}

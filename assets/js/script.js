//hamburge menu
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]");

navOpenBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  overlay.classList.toggle("active");
});

overlay.addEventListener('click', () => {
  header.classList.remove('nav-open');
  overlay.classList.remove('active');
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    overlay.classList.remove("active");
  });
});


// Script to handle back-to-top button visibility and action
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


//form validation


  document.addEventListener('DOMContentLoaded', function() {
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');
    const people = document.getElementById('people');

    // Date Validation: Automatically block past dates for checkout
    checkin.addEventListener('change', function() {
      const checkinDate = new Date(checkin.value);
      checkout.min = checkin.value; // Set minimum date for checkout

      // Reset checkout if it's before the check-in date
      if (new Date(checkout.value) <= checkinDate) {
        checkout.value = '';
      }
    });

    // Limit people input to positive numbers and max 50
    people.addEventListener('input', function() {
      let peopleValue = parseInt(people.value);
      
      if (isNaN(peopleValue) || peopleValue < 1) {
        people.value = 1; // Set default minimum value
      } else if (peopleValue > 50) {
        people.value = 50; // Set maximum limit
      }
    });

    // Form validation on submit
    document.querySelector('.tour-search-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission until validation

      const destination = document.getElementById('destination').value;
      const peopleValue = parseInt(people.value);
      const checkinDate = checkin.value;
      const checkoutDate = checkout.value;

      // Validate each field
      if (!destination.trim()) {
        alert('Please enter a destination.');
        return;
      }

      if (peopleValue <= 0 || peopleValue > 50) {
        alert('Please enter a valid number of people (1-50).');
        return;
      }

      if (!checkinDate || !checkoutDate) {
        alert('Please select both check-in and check-out dates.');
        return;
      }

      // Ensure check-out date is after check-in
      if (new Date(checkoutDate) <= new Date(checkinDate)) {
        alert('Check-out date must be after the check-in date.');
        return;
      }

      // If all validations pass
      alert('Inquiry submitted successfully!');
      this.submit(); // Proceed with form submission
    });
  });


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

const form = document.querySelector(".tour-search-form");


form.addEventListener("submit", (e) => {
  const people = document.getElementById("people").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = documnet.getElementById("checkout").value;

  if (new Date(checkin) > new Date(checkout)) {
    alert("Check-out date must be after check-in date.");
    e.preventDefault();
  }

  if (people <=0) {
    alert("Number of people must be greater than zero.");
    e.preventDefault();
  }

});
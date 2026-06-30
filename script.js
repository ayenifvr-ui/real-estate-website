document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const header = document.getElementById('mainHeader');
  const contactForm = document.getElementById('contactForm');

  mobileMenuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      navLinks.classList.remove('open');
    });
  });

  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 16);
  });

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    if (!name || !email || !message) {
      alert('Please complete all required fields before sending.');
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    setTimeout(function () {
      alert('Thanks! Your message has been sent. We will contact you soon.');
      contactForm.reset();
      submitButton.disabled = false;
      submitButton.textContent = 'Send Message';
    }, 1300);
  });

  document.querySelectorAll('.property-card').forEach(function (card) {
    card.addEventListener('click', function () {
      const title = card.dataset.title || card.querySelector('h3').textContent;
      const price = card.querySelector('.property-price').textContent;
      const location = card.querySelector('.property-location').textContent;
      alert(`${title}\n${price}\n${location}\n\nContact us to schedule a viewing.`);
    });
  });
});

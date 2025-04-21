

    AOS.init({
      duration: 1000,
      once: true,
    });



  window.onscroll = function () {
    var header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add("py-2");
      header.classList.remove("py-4");
    } else {
      header.classList.add("py-4");
      header.classList.remove("py-2");
    }
  };


  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });



  document.getElementById('custom-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const formAction = 'https://docs.google.com/forms/d/e/1FAIpQLSeJAesHQtC6ARY8Uf4LWFPhrPTLsbFzVTqhDcaUtmoEbQdlrg/viewform?usp=dialog';
    
    fetch(formAction, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    })
    .catch(() => {
      alert('Message failed to send. Please try again.');
    });
  });

  //mobile touch glow
  document.querySelectorAll('.tool-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
  
      item.classList.add('clicked');
  
      setTimeout(() => {
        item.classList.remove('clicked');
  
        const href = item.closest('a')?.getAttribute('href');
        const dataLink = item.getAttribute('data-link');
  
        // If it's inside an <a>, go to that page
        if (href && href !== "#") {
          window.location.href = href;
        } 
        // Or fallback to open the data-link in a new tab
        else if (dataLink) {
          window.open(dataLink, '_blank');
        }
  
      }, 10); // glow duration
    });
  });

  ['DOMContentLoaded', 'pageshow'].forEach(evt =>
    window.addEventListener(evt, () => {
      document.querySelectorAll('.tool-item.clicked').forEach(item => {
        item.classList.remove('clicked');
      });
    })
  );
const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show the right content by ID
      const target = tab.getAttribute('data-tab');
      contents.forEach(content => {
        content.classList.remove('active');
        if (content.id === target) {
          content.classList.add('active');
        }
      });
    });
  });

  function scrollTabs(amount) {
    const tabs = document.getElementById('tabs');
    tabs.scrollLeft += amount;
  }

//owls
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    stagePadding: 100,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20
      },
      600: {
        items: 2,
        stagePadding: 30
      },
      1000: {
        items: 3,
        stagePadding: 120
      }
    }
  });
});

//animated
AOS.init();

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
const dots = document.querySelectorAll('.cursor-trail .dot');
const positions = Array.from(dots).map(() => ({ x: 0, y: 0 }));
let mouse = { x: 0, y: 0 };

document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animate() {
  let prevX = mouse.x;
  let prevY = mouse.y;

  dots.forEach((dot, i) => {
  let pos = positions[i];
  let speed = 0.3 - i * 0.05; // first dot: 0.25, second: 0.20, third: 0.15
  pos.x += (prevX - pos.x) * speed;
  pos.y += (prevY - pos.y) * speed;

  dot.style.transform = `translate(${pos.x - 5}px, ${pos.y - 7}px)`;
  prevX = pos.x;
  prevY = pos.y;
});

  requestAnimationFrame(animate);
}

animate();

// ------- Divs fade in ------- //
const sections = document.querySelectorAll('.section-container > div');

function revealOnScroll() {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      sec.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ------- Nav bar icons ------- //
window.addEventListener("scroll", () => {
  const socialLinks = document.querySelector(".social-links");
  const navPlaceholder = document.getElementById("navbar-social-placeholder");

  if (window.scrollY > 550) {
    if (!navPlaceholder.querySelector(".social-links")) {
      // clone the original icons
      const clone = socialLinks.cloneNode(true);
      clone.classList.add("in-nav"); // apply nav-specific styles
      navPlaceholder.appendChild(clone);
    }
  } else {
    // remove cloned version when scrolled back up
    const navClone = navPlaceholder.querySelector(".social-links");
    if (navClone) navClone.remove();
  }
});
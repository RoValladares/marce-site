// 1️⃣ Animación al hacer scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 }
);
sections.forEach(section => observer.observe(section));

// 2️⃣ Movimiento 3D con el mouse
document.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  document.querySelector(".wrapper").style.transform =
    `rotateX(${-y}deg) rotateY(${x}deg)`;
});

// 3️⃣ Interacción exagerada en imágenes
document.querySelectorAll(".work-grid img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.15) rotate(2deg)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1) rotate(0deg)";
  });
});

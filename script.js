function toggleMenu(){
  const links = document.getElementById("navlinks");
  if(!links) return;
  links.classList.toggle("open");
}

document.addEventListener("click", (e) => {
  const links = document.getElementById("navlinks");
  const burger = document.getElementById("burger");
  if(!links || !burger) return;
  if(links.classList.contains("open") && !links.contains(e.target) && e.target !== burger){
    links.classList.remove("open");
  }
});

// Slide-in animation for motivation cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".why-lipids-card, .we-medicine-card").forEach(el => {
  observer.observe(el);
});

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
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".why-lipids-card, .we-medicine-card");
  if (!cards.length) return;

  // Fallback: if observer never fires, force cards visible after 1.5s
  const fallback = setTimeout(() => {
    cards.forEach(el => el.classList.add("slide-in"));
  }, 1500);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
        observer.unobserve(entry.target);
        // If all cards are visible, clear the fallback
        if (document.querySelectorAll(".why-lipids-card.slide-in, .we-medicine-card.slide-in").length === cards.length) {
          clearTimeout(fallback);
        }
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

  requestAnimationFrame(() => {
    cards.forEach(el => observer.observe(el));
  });
});

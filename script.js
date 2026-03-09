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
  const blueCard = document.querySelector(".why-lipids-card");
  const greenCard = document.querySelector(".we-medicine-card");
  if (!blueCard && !greenCard) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = el.classList.contains("we-medicine-card") ? 180 : 0;
      setTimeout(() => el.classList.add("slide-in"), delay + 80);
      observer.unobserve(el);
    });
  }, { threshold: 0.05 });

  // Double rAF ensures CSS opacity:0 is painted before we start observing
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (blueCard) observer.observe(blueCard);
      if (greenCard) observer.observe(greenCard);
    });
  });
});

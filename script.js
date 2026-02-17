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

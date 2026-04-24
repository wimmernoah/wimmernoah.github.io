function animate() {
  document.querySelectorAll("svg path").forEach((path, i) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.animation = "none";
    setTimeout(() => {
      path.style.animation = `draw 0.5s ease forwards ${i * 0.4}s`;
    }, 50);
  });
}

animate();

document.querySelectorAll(".grid img").forEach((img) => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => {
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox").classList.add("active");
  });
});

document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").classList.remove("active");
});

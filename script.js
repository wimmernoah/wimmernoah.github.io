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

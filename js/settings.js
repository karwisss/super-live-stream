document.getElementById('brightnessSlider').oninput = (e) => {
  document.body.style.filter = `brightness(${e.target.value}%)`;
};
document.getElementById('contrastSlider').oninput = (e) => {
  document.body.style.filter += ` contrast(${e.target.value}%)`;
};
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}
function toggleFullscreen() {
  const el = document.documentElement;
  if (!document.fullscreenElement) {
    el.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
function copyUrl() {
  navigator.clipboard.writeText(window.location.href);
}

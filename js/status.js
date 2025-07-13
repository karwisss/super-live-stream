function checkStream() {
  const statusEl = document.getElementById("streamStatus");
  fetch('https://yourdomain.com/stream.m3u8', { method: "HEAD" })
    .then(res => {
      if (res.ok) {
        statusEl.textContent = "🔴 Transmisja na żywo";
        statusEl.style.color = "lime";
      } else {
        statusEl.textContent = "🔌 Stream offline";
        statusEl.style.color = "red";
      }
    })
    .catch(() => {
      statusEl.textContent = "🔌 Stream offline";
      statusEl.style.color = "red";
    });
  setTimeout(checkStream, 10000);
}
checkStream();
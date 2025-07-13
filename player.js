const video = document.getElementById('livePlayer');
if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource('https://yourdomain.com/stream.m3u8');
  hls.attachMedia(video);
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = 'https://yourdomain.com/stream.m3u8';
}
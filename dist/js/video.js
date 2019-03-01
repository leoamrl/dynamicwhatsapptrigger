var play_video = document.getElementById("play_video");
var video_frame = document.getElementById("video_frame");
play_video.addEventListener('click', function () {
  play_video.classList.add('open');
  video_frame.classList.add('open');
  video_frame.innerHTML += '<iframe class="video__player" src="https://www.youtube.com/embed/oXkohvZCq1U?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
});
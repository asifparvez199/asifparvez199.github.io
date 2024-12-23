const downloadBtn = document.getElementById("download-btn");
const mediaUrlInput = document.getElementById("media-url");
const mediaTypeSelect = document.getElementById("media-type");
const timer = document.getElementById("timer");
const countdown = document.getElementById("countdown");
const animation = document.getElementById("animation");

downloadBtn.addEventListener("click", () => {
  const mediaUrl = mediaUrlInput.value;
  const mediaType = mediaTypeSelect.value;

  if (!mediaUrl) {
    alert("Please enter a valid URL!");
    return;
  }

  timer.classList.remove("hidden");
  animation.classList.remove("hidden");

  let timeLeft = 3;
  countdown.textContent = timeLeft;

  const interval = setInterval(() => {
    timeLeft -= 1;
    countdown.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      timer.classList.add("hidden");
      animation.classList.add("hidden");
      downloadFile(mediaUrl, mediaType);
    }
  }, 1000);
});

function downloadFile(url, type) {
  const a = document.createElement("a");
  a.href = url;
  a.download = `primedark.${type.split("/")[1]}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

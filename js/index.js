window.onload = function () {
  let zSpacing = -1000,
    lastPost = zSpacing / 5,
    $frames = document.getElementsByClassName("frame"),
    frames = Array.from($frames),
    zVals = [];

  window.onscroll = function () {
    let top = document.documentElement.scrollTop;
    let delta = lastPost - top;
    lastPost = top;

    frames.forEach((n, i) => {
      zVals[i] = i * zSpacing + zSpacing + lastPost * +5.5;
      frame = frames[i];
      transform = `translateZ(${zVals[i]}px)`;
      opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
      frame.setAttribute(
        "style",
        `transform: ${transform}; opacity: ${opacity}`
      );
    });
  };

  window.scrollTo(0, 1);

  let soundButton = document.querySelector(".soundbutton"),
    audio = document.querySelector(".audio");

  soundButton.addEventListener("click", (e) => {
    soundButton.classList.toggle("paused");
    audio.paused ? audio.play() : audio.pause();
  });

  window.onfocus = function () {
    soundButton.classList.contains("paused") ? audio.pause() : audio.play();
  };

  window.onblur = function () {
    audio.pause();
  };
};

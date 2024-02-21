let zSpacing = -1000,
  lastPost = zSpacing / 5,
  $frames = document.getElementsByClassName("frame"),
  frames = Array.from($frames),
  zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastPost - top;
  lastPost = top;
  frames.forEach((n, i) => {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5;
    let frame = frames[i];
    let transform = `translateZ(${zVals[i]}px`;
    frame.setAttribute("style", `transform: ${transform}`);
  });
};

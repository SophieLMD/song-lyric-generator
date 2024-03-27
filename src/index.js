function generateSong(event) {
  event.preventDefault();
  new Typewriter("#song", {
    strings: "Even old New York, was once New Amsterdam",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);

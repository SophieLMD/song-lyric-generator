function displaySong(response) {
  new Typewriter("#song", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  console.log("song generated");
}
function generateSong(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-input");
  let apiKey = "tfb34aff78c33f3d839do95056440025";
  let context =
    "You are an expert in music and writing song lyrics. You like to write humorous song lyrics. Your task is to write a 5 line song verse which is written in basic html. Do NOT include a title and do NOT include the words CSS, HTML or any other words relating to code, in your response. Follow the user instructions which will define the topic of your song and do NOT use the word html in your response. Separate each line of the song with <br/>. Please include your signature of 'SheCodes AI' in <strong><strong> at the end of your song";
  let prompt = `User instructions: Generate a humorous song about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let songElement = document.querySelector("#song");
  songElement.classList.remove("hidden");
  songElement.innerHTML = `<div class="generating">⏱ Generating humorous song lyrics about ${instructionsInput.value}.</div>`;
  axios.get(apiUrl).then(displaySong);
  console.log("generating song");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
}
let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);

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
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "tfb34aff78c33f3d839do95056440025";
  let context =
    "You are an expert in music and writing song lyrics. You like to write humorous song lyrics. Your task is to write a 5 line song verse which is written in basic html. Follow the user instructions which will define the topic of your song and do NOT mention HTMLInputElement. Separate each line of the song with <br/>. Please include your signature of 'SheCodes AI' in <strong> at the end of your song";
  let prompt = `User instructions: Generate a humorous song about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displaySong);
  console.log("generating song");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
}
let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);

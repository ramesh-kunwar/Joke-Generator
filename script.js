const joke = document.getElementById("joke");
const button = document.getElementById("jokeBtn");

// Get Joke
async function getJoke() {
  const api = "https://api.chucknorris.io/jokes/random";

  const response = await fetch(api);
  const data = await response.json();

  joke.textContent = data.value;
//   console.log(data.value);
}

// Get Joke on page load (beginning)
getJoke();

// Generate Joke on button click
button.addEventListener("click", getJoke);

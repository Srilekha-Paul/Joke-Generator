/*const jockContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getjoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
           jokeContainer.textContent = ` ${item.joke} `;
});
    }
            
btn.addEventListener("click",getjoke);
getjoke();*/
const jokeContainer = document.getElementById("joke"); // fixed variable name
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            jokeContainer.textContent = data.joke;
        })
        .catch(error => {
            jokeContainer.textContent = "Failed to load joke.";
            console.error("Error fetching joke:", error);
        });
};

btn.addEventListener("click", getJoke);
getJoke();

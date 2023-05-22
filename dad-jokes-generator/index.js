const btnEL = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "Ek/D04geedbcswUQQ0efxA==cMCHZGwcYtnczAZI";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    try {
        jokeEl.innerText = "Updating...";
        btnEL.ariaDisabled = true;
        btnEL.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEL.ariaDisabled = false;
        btnEL.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEL.ariaDisabled = false;
        btnEL.innerText = "oops";

        console.log(errors);
    }
}

btnEL.addEventListener("click", getJoke);

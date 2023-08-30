const apiURL10 = 'https://official-joke-api.appspot.com/jokes/ten';

const tenJokes = async () => {
  const res = await fetch(apiURL10)
  const joke = await res.json();
  console.log('joke:', joke);
};

const apiURL = 'https://official-joke-api.appspot.com/jokes/random';

const random = async () => {
  const res = await fetch(apiURL)
  const joke = await res.json();
  console.log('joke:', joke);
  const p = document.createElement("p");
  const p2 = document.createElement("p2");
  p.textContent = joke.setup;
  p2.textContent = joke.punchline;
  document.body.appendChild(p);
  document.body.appendChild(p2);
  const button = document.createElement("button");
  button.textContent = "CLICK ME!";
  button.id = "button";
  document.body.appendChild(button);
  
  const getRandomJoke = async () => {
      const res = await fetch(apiURL, {
          headers: {
              'Accept': 'application/json'
            }
        });
        const joke = await res.json();
        console.log(joke);
        p.innerHTML = joke.setup
        p2.innerHTML = joke.punchline;

    }
    button.addEventListener("click", getRandomJoke);
};

tenJokes();

random();


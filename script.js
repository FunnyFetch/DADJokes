const apiURL10 = 'https://official-joke-api.appspot.com/jokes/ten';

const tenJokes = async () => {
  try {
    const res = await fetch(apiURL10);
    const jokesData = await res.json();
    console.log('joke:', jokesData);
    
    // Assuming you have an <ul> element in your HTML
    const ul = document.querySelector('ul');
    
    jokesData.forEach(joke => {
      const li = document.createElement('li');
      li.textContent = joke.setup;
      ul.appendChild(li);
      const punch = document.createElement('p')
      punch.textContent = joke.punchline
      li.appendChild(punch)
    });
  } catch (error) {
    console.error(error);
  }
};


const apiURL = 'https://official-joke-api.appspot.com/jokes/random';

const random = async () => {
  const res = await fetch(apiURL)
  const joke = await res.json();
  console.log('joke:', joke);
  
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  p.textContent = joke.setup;
  p2.textContent = joke.punchline;
  
  const jokeContainer = document.querySelector('#random-card');
  jokeContainer.appendChild(p);
  jokeContainer.appendChild(p2)
 
  const button = document.createElement("button");
  button.textContent = "CLICK ME!";
  button.id = "button";
  jokeContainer.appendChild(button);
  
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

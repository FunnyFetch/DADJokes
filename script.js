const apiURL10 = 'https://official-joke-api.appspot.com/jokes/ten';



function addJoke(joke) {
  let favJokeList = JSON.parse(sessionStorage.getItem('favJoke') || "[]");
  favJokeList.push(joke);
  sessionStorage.setItem('favJoke', JSON.stringify(favJokeList));
}

const tenJokes = async () => {
  try {
    const res = await fetch(apiURL10);
    const jokesData = await res.json();
    console.log('joke:', jokesData);
   
    
    const flipCards = document.querySelectorAll('.flip-card');

    
    
  


  jokesData.forEach((joke, index) => {
    const flipCard = document.getElementById(`joke${index + 1}`);
    const frontDiv = flipCard.querySelector('.flip-card-front');
    const backDiv = flipCard.querySelector('.flip-card-back');
    
    frontDiv.querySelector('.setup').textContent = joke.setup;
    backDiv.querySelector('.punchline').textContent = joke.punchline;
  
  
    flipCard.dataset.id = index + 1;
  
    flipCard.addEventListener('click', () => {
      addJoke(joke);
    });
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

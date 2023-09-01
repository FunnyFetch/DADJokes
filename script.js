const apiURL10 = 'https://official-joke-api.appspot.com/jokes/ten';


function addJoke(jokeItem){
  const jokeHtml = jokeItem.outerHTML;
  let favJokeList = JSON.parse(localStorage.getItem('favJoke')|| "[]");
  favJokeList.push(jokeHtml);
  localStorage.setItem('favJoke', JSON.stringify(favJokeList));
  
}
const tenJokes = async () => {
  try {
    const res = await fetch(apiURL10);
    const jokesData = await res.json();
    console.log('joke:', jokesData);
    //function to add 2 
    
    const flipCards = document.querySelectorAll('.flip-card');

    
    
  //   // Assuming you have an <ul> element in your HTML
  //   const ul = document.querySelector('ul');
    //function to add item
    //that will be onClick 
    //onclick="addJoke()"

    jokesData.forEach((joke, index) => {
      const flipCard = document.getElementById(`joke${index + 1}`);
      const frontDiv = flipCard.querySelector('.flip-card-front');
      const backDiv = flipCard.querySelector('.flip-card-back')
      
      frontDiv.querySelector('.setup').textContent = joke.setup;
      backDiv.querySelector('.punchline').textContent = joke.punchline;
      
      flipCard.addEventListener('click', () => {
        flipCard.classList.toggle('flipped');
      
      li.onclick = function (){
        addJoke(this)
      }
    })
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

const dataToSend = 'Hey'
// console.log(localStorage)
localStorage.setItem('myData', dataToSend)
console.log(dataToSend)
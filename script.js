// const apiURL10 = 'https://official-joke-api.appspot.com/jokes/ten';

// const tenJokes = async () => {
//   const res = await fetch(apiURL10);
//   const tenJokes = await res.json()
//   console.log('joke:', tenJokes)
// .then(res => {
//   return res.json()
// })
// .then(data => {
//   data.forEach(element => {
    
// const li = document.createElement('li')
//       const print = `<li>${joke.setup}</li>`
// console.log(print)
//       document.querySelector('ul').insertAdjacentHTML(before, print)
//   });
// })

// .catch(error => console.log(error))
// }



// const tenJokes = async () => {
//   const res = await fetch(apiURL10);
//   const jokes10 = await res.json();
//   console.log('joke:', jokes10);
//   const ul = document.createElement("ul");
//   const ul1 = document.createElement("ul");
//   for(let i = 0; i < 10; i++) {
//     const li = document.createElement("li");
//     const li1 = document.createElement("li");
//     li.textContent = jokes10.setup
//     li1.textContent = jokes10.punchline
//     console.log(jokes10[i])
//     document.body.appendChild(li)
//     document.body.appendChild(li1)
//   }
//    document.body.appendChild(ul)
//   document.body.appendChild(ul1)
// };

const apiURL = 'https://official-joke-api.appspot.com/jokes/random';

const random = async () => {
  const res = await fetch(apiURL)
  const joke = await res.json();
  console.log('joke:', joke);
  
  const p = document.createElement("p");
  const p2 = document.createElement("p2");
  p.textContent = joke.setup;
  p2.textContent = joke.punchline;
  
  const jokeContainer = document.querySelector('#generator');
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

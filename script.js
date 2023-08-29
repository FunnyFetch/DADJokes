const apiURL = 'https://official-joke-api.appspot.com/jokes/random';

const random = async () => {
  const res = await fetch(apiURL)
  const joke = await res.json();
  console.log('joke:', joke);
  const p = document.createElement("p");
  const p2 = document.createElement("p2");
  p.textContent = joke.setup
  p2.textContent = joke.punchline
  document.body.appendChild(p)
  document.body.appendChild(p2)
};

random();
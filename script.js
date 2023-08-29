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
};

tenJokes();

random();


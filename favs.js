const favJoke = JSON.parse(sessionStorage.getItem('favJoke')) || [];
const ul = document.querySelector('ul');

favJoke.forEach(joke => {
  const li = document.createElement('li');
  li.textContent = joke.setup + ' - ' + joke.punchline;
  ul.appendChild(li);
});




let counter = document.createElement('p');
counter.textContent = favJoke.length;
counter.style.animation = 'flash 2s alternate infinite';
counter.style.color = 'black';
ul.append(counter)

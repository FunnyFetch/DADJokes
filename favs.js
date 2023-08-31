const favJoke = JSON.parse(localStorage.getItem('favJoke')) || [];
const ul = document.querySelector('ul');
console.log(favJoke)
favJoke.forEach(joke => {
    
    ul.innerHTML += joke;
    
})
let counter = document.createElement('p');
counter.textContent = favJoke.length;
counter.style.animation = 'flash 2s alternate infinite';
counter.style.color = 'red';
ul.append(counter)
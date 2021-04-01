let counter = 0;
const counterValue = document.querySelector('#counter-value');
const increment = document.querySelector('#increment');
const decement = document.querySelector('#decrement');
const reset = document.querySelector('#reset');

increment.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
    counterValue.style.color = 'green';
});
decrement.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
    counterValue.style.color = 'red';
});
reset.addEventListener('click', () => {
    counter = 0;
    counterValue.innerHTML = counter;
    counterValue.style.color = 'black';
});

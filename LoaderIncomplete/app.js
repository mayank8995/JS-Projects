const loader = document.querySelector('.loader');
window.addEventListener('DOMContentLoaded', loadTheBar);
let len = 0;
function loadTheBar() {
    const id = setInterval(() => {
        if (loader.style.width === '200px') {
            clearInterval(id);
        } else {
            len = len + 10;
            loader.style.width = `${len}px`;
            loadTheBar();
        }
    }, 200);
}
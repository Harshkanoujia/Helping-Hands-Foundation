let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let lengthItems = items.length - 1;
let active = 0;
let isAnimating = false; // Add variable to track animation state

next.onclick = function(){
    if (!isAnimating) {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }
}

prev.onclick = function(){
    if (!isAnimating) {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }
}

let refreshInterval = setInterval(() => { next.click() }, 3000);

function reloadSlider() {
    isAnimating = true; // Set animation flag
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 3000);

    // Reset animation flag after transition ends
    setTimeout(() => {
        isAnimating = false;
    }, 1000); // Set timeout to match transition duration
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        if (!isAnimating) {
            active = key;
            reloadSlider();
        }
    })
})

window.onresize = function(event) {
    reloadSlider();
};
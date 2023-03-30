//slider 2
  
let isDown = false;
let scrollLeft;
let starts;
let sliderCourse = document.querySelector('.items2');

const end = () => {
    isDown = false;
    sliderCourse.classList.remove('active');
}

const start = (moving) => {
    isDown = true;
    sliderCourse.classList.add('active');
    // starts = moving.pageX;
    starts = moving.pageX || moving.touches[0].pageX - sliderCourse.offsetLeft;
    LeftScroll = sliderCourse.scrollLeft;
}

const move = (moving) => {
    if(!isDown) return;
    moving.preventDefault();
    // const distance = (moving.pageX- starts);
    const temp = moving.pageX || moving.touches[0].pageX - sliderCourse.offsetLeft;
    const distance = (temp - starts);
    sliderCourse.scrollLeft = LeftScroll - distance;
}


( functionMoves = () => {
    sliderCourse.addEventListener('mousedown', start);
    sliderCourse.addEventListener('mousemove', move);
    sliderCourse.addEventListener('mouseup', end);
    sliderCourse.addEventListener('mouseleave', end);
    sliderCourse.addEventListener('touchstart', start);
    sliderCourse.addEventListener('touchmove', move);
    sliderCourse.addEventListener('touchend', end);
    sliderCourse.addEventListener('touchleave', end);
})();

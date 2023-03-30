window.onload = () => {

    const ads = document.getElementsByClassName('carouselAds');
    const len = ads.length;
    let index = 0;
    const left = document.getElementById('buttonLeft');
    const right = document.getElementById('buttonRight');

    function goToLeft(){
        ads[index].classList.remove('active');
        if(--index < 0){
            index = len-1;
         } else {
             index = index;
         }
        ads[index].classList.add('active');
        clearInterval(autoScrolling);
        autoScrolling = setInterval(() =>{
            goToRight()
        }, 2000);
    }
 
    function goToRight(){
        ads[index].classList.remove('active');
        if(++index >= len){
            index = 0;
         } else {
             index = index;
         }
        ads[index].classList.add('active');
        clearInterval(autoScrolling);

        autoScrolling = setInterval(() =>{
            goToRight()
        }, 2000);
    }

    let autoScrolling = setInterval(() => {
        goToRight()
    }, 2000);

    left.onclick = goToLeft;
    right.onclick = goToRight;

    //slider 1

    let isDown = false;
    let starts;
    let LeftScroll;
    let sliderCourse = document.querySelector('.items');

    const end = () => {
        isDown = false;
        slider.classList.remove('active');
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

   
}

window.onload = () => {
    const ads = document.getElementsByClassName('carouselAds');
    const len = ads.length;
    let index = 0;
    const left = document.getElementById('buttonLeft');
    const right = document.getElementById('buttonRight');

    const left2 = document.getElementById('buttonLeft2');
    const right2 = document.getElementById('buttonRight2');

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

    left.onclick = goToLeft;
    right.onclick = goToRight;

    left2.onclick = goToLeft;
    right2.onclick = goToRight;

    let autoScrolling = setInterval(() => {
        goToRight()
    }, 2000);

} 
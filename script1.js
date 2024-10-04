//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.parent');
let SliderDom = carouselDom.querySelector('.parent .list');
let thumbnailBorderDom = document.querySelector('.parent .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.parent .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;


nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.parent .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.parent .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
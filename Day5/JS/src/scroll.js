let normalCount = 0;
let throtlleCount = 0;
let debounceCount = 0;
let timer = null;
let isThrottleScroll = true;
const normalCountEle = document.querySelector('.normalCount');
const throtlleCountEle = document.querySelector('.throtlleCount');
const debounceCountEle = document.querySelector('.debounceCount');

function showCount() {
    normalCountFn();
    throtlleCountFn(3000);
    debounceCountFn(3000);
}

function normalCountFn() {
    normalCount++;
    normalCountEle.innerHTML = `Normal scroll count is --> ${normalCount}`;
}

function throtlleCountFn(delay) {
    if(isThrottleScroll){    
        throtlleCount++;
        throtlleCountEle.innerHTML = `Throttle scroll count is --> ${throtlleCount}`;
        isThrottleScroll = false;
        setTimeout(() => {
            isThrottleScroll = true
        }, delay);
    }
}

function debounceCountFn(delay) {
    clearTimeout(timer);
    timer = setTimeout(() => {
        debounceCount++;
        console.log(debounceCount);
        debounceCountEle.innerHTML = `Debounce scroll count is --> ${debounceCount}`;
    }, delay);
}
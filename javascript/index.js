let btn = document.querySelector(".btn");
let item = document.querySelector(".box");

document.onload = () => {
    item.classList.toggle('animate');
    item.addEventListener('animationend', animationEndCallback);
};

let animationEndCallback = (e) => {
    item.removeEventListener('animationend', animationEndCallback);
    item.classList.remove('animate');
}

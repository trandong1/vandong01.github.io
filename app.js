const listMovies = document.querySelectorAll(".slide__content-wrapper.hd");
const listMovie = document.querySelector(".slide__content-wrapper.hd");
const iconLeft = document.querySelector(".slide__icon.left");
const iconRight = document.querySelector(".slide__icon.right");
const listMovieLength = document.querySelectorAll(
    ".slide__content-wrapper.hd"
).length;
const slideContent = document.querySelector(".slide__content");

iconLeft.onclick = (e) => {
    listMovies.forEach((item, i) => {
        item.style.transform = `translateX(0px)`;
    });
};

iconRight.onclick = (e) => {
    listMovies.forEach((item, i) => {
        item.style.transform = `translateX(-1400px)`;
    });
};

const myTimeout1 = setInterval(() => {
    listMovies.forEach((item, i) => {
        item.style.transform = `translateX(-1400px)`;
    });
}, 3000);

const myTimeout2 = setInterval(() => {
    listMovies.forEach((item, i) => {
        item.style.transform = `translateX(0px)`;
    });
}, 6000);

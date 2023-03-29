const scrollFunc = () => {

    let header = document.querySelector('.header'),
headerH = document.querySelector('.header').clientHeight;

window.addEventListener('scroll', () => {
    const navOffset = header.offsetTop;
    const scroll = this.scrollTop();
 
 
    console.log(navOffset);
 
 });



document.onscroll = () => {
let scroll = window.scrollY;

if (scroll > headerH) {
   header.classList.add('header_active');
} else {
   header.classList.remove('header_active');
}
};


function scrollTo(e) {
window.scroll({
left: 0,
top: e.offsetTop,
behavior: 'smooth',
});
}

// reasonsBtn.addEventListener('click', () => {
// scrollTo(reasons);
// });

function addScollList(startSelect, endSelect) {
    const start = document.querySelector(startSelect);
    const end = document.querySelector(endSelect);

    start.addEventListener('click', () => {
        scrollTo(end);
    });
}

addScollList('#reasons', '#res');
addScollList('#work', '.works');
addScollList('#price', '.price');
addScollList('#scheme', '.scheme');
addScollList('#reviews', '.slider');
addScollList('#contacts', '.quesition');

};

export default scrollFunc;
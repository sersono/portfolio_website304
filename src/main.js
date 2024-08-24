'use strict';

// document.querySelector('.header');

// window.document.querySelector();
// 브라우저가 제공하는 객체, 글로벌객체

// const header = document.querySelector('.header');
// console.log(header);

// const header = document.querySelector('.header');
// const headerRect = header.getBoundingClientRect();
// console.log(headerRect);
// const headerHeight = headerRect.height;

// const header = document.querySelector('.header');
// const headerHeight = header.getBoundingClientRect().heiight;
// document.addEventListener('scroll', function () {
    // 이름 없는 함수
    // 하고 싶은 일 작성
    // document.addEventListener('scroll', () => {
// })

// const header = document.querySelector('.header');
// const headerHeight = header.getBoundingClientRect().heiight;
// document.addEventListener('scroll', () => {
    // 스크롤되는 Y좌표가 headerHeight보다 크면 다른 스타일링!
    // console.log(window.scrollY);
    // if (window.scrollY > headerHeight) {
        // header.classList.add('header--dark');
    // } else {
        // header.classList.remove('header--dark');
    // }
// });


// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});


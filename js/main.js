'use strict';{

// intersection abserver api

  

  // const images = document.querySelectorAll('.hero img');
  // let currentIndex = 0;

  // setTimeout(() => {
  //   images[currentIndex].classList.remove('current');
  //   currentIndex++;
  //   images[currentIndex].classList.add('current');
  // }, 2000);

  


  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const close1 = document.getElementById('close1');
  const close2 = document.getElementById('close2');
  const close3 = document.getElementById('close3');
  const close4 = document.getElementById('close4');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  close1.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  close2.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  close3.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  close4.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });


function onScrollCallback(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

  const header = document.querySelector('header');

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));
}

const image = new Rellax('.pic img', {
  round: false,
  center: true
})

window.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});


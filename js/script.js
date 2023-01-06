let slide = document.querySelectorAll('.offer__slide')
let close = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let text = document.querySelector('#current')
let total = document.querySelector('#total')
let slide_next = 0
close.onclick = () => {
  slide_next--
  shou_slide(slide_next)
}


next.onclick = () => {
  slide_next++
  shou_slide(slide_next)
}

function shou_slide(nc) {
  if (nc >= slide.length) {
    slide_next = 0
  }

  if (nc == -1) {
    slide_next = slide.length - 1
  }
  slide.forEach((slide) => {
    slide.style.display = "none"
    slide.classList.remove('fade')
  })

  slide[slide_next].classList.add('fade')
  slide[slide_next].style.display = "block"

  text.innerHTML = '0' + (slide_next + 1)
}

shou_slide()


let tabcontents = document.querySelectorAll('.tabcontent')
let btns = document.querySelectorAll('.tabheader__item')

showTabs()

function showTabs(n = 0) {
  tabcontents.forEach(element => {
    element.style.display = "none"
    element.classList.remove('fade')
  });
  tabcontents[n].classList.add('fade')
  tabcontents[n].style.display = "block"
}


btns.forEach((btn, index) => {
  btn.onclick = () => {
    btns.forEach(el => el.classList.remove('tabheader__item_active'))

    btn.classList.add('tabheader__item_active')
    showTabs(index)
  }
})
// modal

let modalClick = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalClose = document.querySelector('[data-close]')

function showModal() {
  modal.classList.toggle('show')
  document.body.style.overflow = 'hidden'
}

modalClick.forEach((btn) => {
  btn.addEventListener('click', showModal)
})

modalClose.addEventListener('click', hideModal)

function hideModal() {
  modal.classList.toggle('show')
  document.body.style.overflow = ''
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    hideModal()
  }
})

let vibor = document.querySelector('.calculating__choose-item')
let man = document.querySelector('#man')
let woman = document.querySelector('#woman')
let low = document.querySelector('#low')
let small = document.querySelector('#small')
let medium = document.querySelector('#medium')
let high = document.querySelector('#high')

low.onclick = () => {
  low.style.backgroundColor = "green";
  small.style.backgroundColor = "white";
  medium.style.backgroundColor = "white";
  high.style.backgroundColor = "white";
}

small.onclick = () => {
  small.style.backgroundColor = "green";
  low.style.backgroundColor = "white";
  medium.style.backgroundColor = "white";
  high.style.backgroundColor = "white";
}

medium.onclick = () => {
  medium.style.backgroundColor = "green";
  low.style.backgroundColor = "white";
  small.style.backgroundColor = "white";
  high.style.backgroundColor = "white";
}

high.onclick = () => {
  high.style.backgroundColor = "green";
  low.style.backgroundColor = "white";
  small.style.backgroundColor = "white";
  medium.style.backgroundColor = "white";
}

man.onclick = () => {
  man.style.backgroundColor = "green";
  woman.style.backgroundColor = "white";
}
woman.onclick = () => {
  woman.style.backgroundColor = "green";
  man.style.backgroundColor = "white";
}
blue.onclick = () => {
  modal.style.display = "block";
  close.onclick = () => {
    modal.style.display = "none";
  };
};

document.body.onscroll = () => {
  console.log(window.scrollY);
}
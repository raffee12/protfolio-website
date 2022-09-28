var burgerIcon = document.querySelector('.mobile-nav-toggle')
var primaryNavigation = document.querySelector('.list-items')
var header = document.querySelector('.priamray-header')
burgerIcon.addEventListener('click',()=> {
  primaryNavigation.hasAttribute('data-visiable') ? burgerIcon.setAttribute("aria-expanded", false)
  :burgerIcon.setAttribute('aria-expanded', true)
 primaryNavigation.toggleAttribute('data-visiable')
 header.toggleAttribute('data-overlay')
})
const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: true,
  dots: true,
  // responsive: {
  //   480: {
  //     dots: false,
  //   }
  // }

});
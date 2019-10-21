const accordionContainer = document.querySelector('.accordion-container')

accordionContainer.addEventListener('click', event => {
  const accordionHeader = event.target.closest('.accordion__header')
  if (accordionHeader) {
    const accordion = accordionHeader.parentElement
    accordion.classList.toggle('is-open')
  }
})

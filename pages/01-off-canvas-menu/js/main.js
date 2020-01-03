const body = document.body
const menuButton = document.querySelector('.menu-button')
const closeButton = document.querySelector('.close-button')
const menu = document.querySelector('.nav')
const links = [...menu.querySelectorAll('a')]

/**
 * Checks if OffcanvasMenu is open
 * @returns Boolean
 */
const isOffcanvasMenuOpen = () => {
	return body.classList.contains('offsite-is-open')
}

/**
 * Opens OffcanvasMenu
 */
const openOffcanvasMenu = () => {
	body.classList.add('offsite-is-open')
	menu.focus()
	links.forEach(link => {
		link.removeAttribute('tabindex')
	})
	menuButton.setAttribute('aria-expanded', 'true')
}

/**
 * Closes OffcanvasMenu
 */
const closeOffcanvasMenu = _ => {
	body.classList.remove('offsite-is-open')
	menuButton.focus()
	links.forEach(link => {
		link.setAttribute('tabindex', -1)
	})
	menuButton.setAttribute('aria-expanded', 'false')
}

// Opens or closes OffcanvasMenu when button is clicked
menuButton.addEventListener('click', _ => {
	isOffcanvasMenuOpen() ? closeOffcanvasMenu() : openOffcanvasMenu()
})

// Closes OffcanvasMenu when closeButton is clicked
closeButton.addEventListener('click', _ => {
	closeOffcanvasMenu()
})

// Closes OffcanvasMenu when escape key pressed
document.addEventListener('keydown', event => {
	if (isOffcanvasMenuOpen() && event.key === 'Escape') {
		closeOffcanvasMenu()
	}
})

// Brings focus back to the menu button if they press Shift + Tab on <nav> OR if they tab into the first element (the close button) before pressing Shift + Tab
document.addEventListener('keydown', event => {
	if (event.key !== 'Tab') return
	if (!event.shiftKey) return
	if (event.target === menu || event.target === closeButton) {
		event.preventDefault()
		menuButton.focus()
	}
})

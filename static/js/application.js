const addMenuEvents = () => {
	Array.from(document.getElementsByTagName('span')).forEach(arrow => {
		arrow.addEventListener('click', () => {
			const isHidden = arrow.classList.contains('down')
			arrow.classList.remove(isHidden ? 'down' : 'up')
			arrow.classList.add(isHidden ? 'up' : 'down')
			arrow.parentNode.nextElementSibling.hidden = !isHidden
		})
	})
}

// DOM is ready
document.addEventListener('DOMContentLoaded', () => {
	addMenuEvents()
})

/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
const display = document.querySelector('#display');
// eslint-disable-next-line no-undef
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (btn.id === '=') {
			// eslint-disable-next-line no-eval
			display.textContent = eval(display.textContent);
		} else if (btn.id === 'ac') {
			display.textContent = '';
		} else if (btn.id === 'de') {
			display.textContent = display.textContent.slice(0, -1);
		} else {
			display.textContent += btn.id;
		}
	});
});

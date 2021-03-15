const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
let unlock = true;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	} 

}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index< popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.feedback'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.feedback.feedback_active');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('feedback_active');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.feedback__column')) {
				popupClose(e.target.closest('.feedback'));
			}
		});
	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('feedback_active');
		
	}
}
function bodyLock() {
	unlock = true;	
}
function bodyUnLock() {
	unlock = false;
}
"use strict"
$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.menu__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
}); 


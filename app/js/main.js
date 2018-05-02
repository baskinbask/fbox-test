
const cards = document.querySelectorAll('.card--wrapper');

const miracleOne = function () {
	for (let i = 0; i < cards.length; i++) {
		let cardItem = cards[i].querySelector('.card__outer');
		let offerDefault = cards[i].querySelector('.card__offer_default');
		let offerDisabled = cards[i].querySelector('.card__offer_disabled');

		if (cardItem.classList.contains('deactive')) {
			offerDefault.style.display = 'none';
			offerDisabled.style.display = 'block';
		};
	}
};
miracleOne();

const miracleTwo = function() {
	for (let i = 0; i < cards.length; i++) {
		cards[i].addEventListener('click', function() {
			let cardItem = cards[i].querySelector('.card__outer');
			let offerDefault = cards[i].querySelector('.card__offer_default');
			let offerSelected = cards[i].querySelector('.card__offer_selected');

			if (!cardItem.classList.contains('deactive')) {
				if (!cardItem.classList.contains('active')) {
				cardItem.classList.add('active', 'no-hover');		
				offerDefault.style.display = 'none';
				offerSelected.style.display = 'block';
				cardItem.addEventListener('mouseout', function() {
					cardItem.classList.remove('no-hover');
				});
				} else {
					cardItem.classList.remove('active');
					offerSelected.style.display = 'none';
					offerDefault.style.display = 'block';		
				}
			} else {
				return false;
			}
		});
	}
}
miracleTwo();

// * For all browsers BESIDES ie11! =))

// cards.forEach(card => {
// 	let cardItem = card.querySelector('.card__outer');
// 	let offerDefault = card.querySelector('.card__offer_default');
// 	let offerDisabled = card.querySelector('.card__offer_disabled');

// 	if (cardItem.classList.contains('deactive')) {
// 		offerDefault.style.display = 'none';
// 		offerDisabled.style.display = 'block';
// 	}
// });

// cards.forEach(card => card.addEventListener('click', function() {
// 	let cardItem = card.querySelector('.card__outer');
// 	let offerDefault = card.querySelector('.card__offer_default');
// 	let offerSelected = card.querySelector('.card__offer_selected');

// 	if (!cardItem.classList.contains('deactive')) {
// 		if (!cardItem.classList.contains('active')) {
// 		cardItem.classList.add('active', 'no-hover');		
// 		offerDefault.style.display = 'none';
// 		offerSelected.style.display = 'block';
// 		cardItem.addEventListener('mouseout', function() {
// 			cardItem.classList.remove('no-hover');
// 		});
// 		} else {
// 			cardItem.classList.remove('active');
// 			offerSelected.style.display = 'none';
// 			offerDefault.style.display = 'block';		
// 		};
// 	} else {
// 		return false;
// 	}
// }));



	
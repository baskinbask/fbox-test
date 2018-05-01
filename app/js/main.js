
const cards = document.querySelectorAll('.card--wrapper');

cards.forEach(card => {
	let cardItem = card.querySelector('.card__outer');
	let offerDefault = card.querySelector('.card__offer_default');
	let offerDisabled = card.querySelector('.card__offer_disabled');

	if (cardItem.classList.contains('deactive')) {
		offerDefault.style.display = 'none';
		offerDisabled.style.display = 'block';
	}
});

cards.forEach(card => card.addEventListener('click', function() {
	let cardItem = card.querySelector('.card__outer');
	let offerDefault = card.querySelector('.card__offer_default');
	let offerSelected = card.querySelector('.card__offer_selected');
	let offeDisabled = card.querySelector('.card__offer_disabled');

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
		};
	} else {
		return false;
	}
}));



	
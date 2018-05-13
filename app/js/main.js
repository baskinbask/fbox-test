
const cards = document.querySelectorAll('.card');

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
		let cardItem = cards[i].querySelector('.card__outer');
		let cardLink = cards[i].querySelector('.card__offer_link');
		let offerDefault = cards[i].querySelector('.card__offer_default');
		let offerSelected = cards[i].querySelector('.card__offer_selected');
		
		cardItem.addEventListener('click', function() {			
			if (!this.classList.contains('deactive')) {
				if (!this.classList.contains('active')) {
					this.classList.add('active', 'no-hover');		
					offerDefault.style.display = 'none';
					offerSelected.style.display = 'block';					
					this.addEventListener('mouseout', function() {
						this.classList.remove('no-hover');
					});
				} else {
					this.classList.remove('active');
					offerSelected.style.display = 'none';
					offerDefault.style.display = 'block';		
				}
			} else {
				return false;
			}
		});

		cardLink.addEventListener('click', function(e) {
			e.preventDefault();			
			if (!cardItem.classList.contains('deactive')) {
				if (!cardItem.classList.contains('active')) {
					cardItem.classList.add('active', 'no-hover');		
					offerDefault.style.display = 'none';
					offerSelected.style.display = 'block';
					cardItem.addEventListener('mouseout', function() {
						this.classList.remove('no-hover');
					});
				}
			} else {
				return false;
			}
		});
	}
}
miracleTwo();



// * For all browsers BESIDES ie11! =))

// const cards = document.querySelectorAll('.card');

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



	
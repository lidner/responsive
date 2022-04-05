$(function () {
	$('.slider__box').slick({
		prevArrow:
			'<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="Arrow Left" />',
		nextArrow:
			'<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="Arrow Right" />',
	});

	$('.menu-btn').on('click', function () {
		$('.menu__list').toggleClass('active');
		$('.phone').toggleClass('hidden');
	});
});

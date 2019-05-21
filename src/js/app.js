import $ from "jquery"
import slick from "slick-carousel"

$('[data-target-carousel]').slick({
	centerMode: true,
	centerPadding: '80px',
	slidesToShow: 1,
	dots: false,
	arrows: false,
});
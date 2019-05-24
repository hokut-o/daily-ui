import $ from "jquery"
import slick from "slick-carousel"

$('[data-target-carousel]').slick({
	centerMode: true,
	slidesToShow: 1,
	dots: false,
	arrows: false,
	variableWidth:true
});
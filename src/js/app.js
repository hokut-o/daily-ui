import $ from "jquery";

const trigger = {
	accordion: $("[data-trigger-accordion]")
};

const toggleAccordion = () => {
	trigger.accordion.on("click", e => {
		$(e.currentTarget)
		.toggleClass("is-active")
		.next()
		.slideToggle("fast", "swing");
	});
};

$(() => {
	toggleAccordion();
});

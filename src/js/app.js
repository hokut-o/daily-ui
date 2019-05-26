import $ from "jquery";

const trigger = {
	accordion: $("[data-trigger-accordion]")
};

const toggleAccordion = () => {
	trigger.accordion.on("click", e => {
		$(e.currentTarget).toggleClass("is-active").next().stop().slideToggle(300, "swing");
	});
};

$(() => {
	toggleAccordion();
});

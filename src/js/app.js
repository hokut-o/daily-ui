import $ from "jquery";

$("[data-trigger-range]").on("input", e => {
	let rangeVal = $(e.currentTarget).val();
	changeRangeStatus(rangeVal);
});

const changeRangeStatus = val => {
	$("[data-target-range]").text(val);
};

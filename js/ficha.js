$("document").ready(function() {
	toggleSearch();
	$("#ficha-compra").toggle();
	$("#cor-select").change(function() {redictTo($("#cor-select").val());});
	$("#buscar-ref").click(function() {toggleSearch();});
	$("#search-ref-form-submit").click(function() {toggleSearch();});
	$(".tab").click(function () { changeTab($(this)); });
});

function redictTo(url) {
	console.log($("#cor-select").val());
	if (url !== undefined) {
		location.href = url;
	};
};

function toggleSearch() {
	$("#buscar-ref").toggle();
	$("#search-ref-form").toggle();
};

function changeTab(tab) {
	if (tab.hasClass("unselected-tab")) {
		$(".selected-tab").removeClass("selected-tab").addClass("unselected-tab");	
		tab.addClass("selected-tab").removeClass("unselected-tab");
		$("#setores").toggle();
		$("#ficha-compra").toggle();
	}
};
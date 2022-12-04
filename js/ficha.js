$("document").ready(function() {
	toggleSearch();
	$("#cor-select").change(function() {redictTo($("#cor-select").val());});
	$("#buscar-ref").click(function() {toggleSearch();});
	$("#search-ref-form-submit").click(function() {toggleSearch();});
	
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
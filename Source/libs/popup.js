
(function () {
    $.getJSON("packages/config.json", function (data) {
        var packageList = $('#package-list');
		var packageListTemplate = $("#package-list-template").html();
		var packageListTemplateCompile = Handlebars.compile(packageListTemplate);
		var html = packageListTemplateCompile(data.packages);
		packageList.html(html);
    });

    $(document).on("click",".js-show-package-details",function(e) {
    	$(this).closest("li").find("ul.package-details").toggle();
    	e.preventDefault();
    });

})();
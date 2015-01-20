
(function () {
    $.getJSON("packages/config.json", function (data) {
        var packageList = $('#package-list');
        $.each(data.packages, function (i, giPackage) {
            packageList.append('<li>' + giPackage.name + '</li>');
        });
    });

})();
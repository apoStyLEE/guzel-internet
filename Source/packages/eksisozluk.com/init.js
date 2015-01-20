
(function () {
    var cssFile = getExtensionResource("/packages/eksisozluk.com/theme.css");
    var removeElementSelectors = ["header", ".ad-medyanet", "#aside", "#site-footer", ".sub-title-menu", ".options",
						".rate-options", "#partial-index h2"];

    $('head').append('<link rel="stylesheet" href="' + cssFile + '" type="text/css" />');

    $.each(removeElementSelectors, function (i, item) {
        $(item).remove();
    });

})();


function getExtensionResource(filePath) {
    var scriptFileSrc = $("head script[src^='chrome-extension://']").attr("src");
    var extensionId = scriptFileSrc.replace("chrome-extension://", "").split('/')[0];
    return "chrome-extension://" + extensionId + filePath;
}
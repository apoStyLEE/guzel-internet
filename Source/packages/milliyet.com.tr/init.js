
(function () {
    console.log("milliyet package start");

    var cssFile = getExtensionResource("/packages/milliyet.com.tr/theme.css");

    var removeElementSelectors = [".bannerBar", ".dateBar", ".logoBar", ".cellA2", "#_bottom", "#_MiddleRight1", ".nav",
								  ".flashbar .box1 span", ".tagBar.new", "#_MiddleCenter1", "#MansetImage11", "#_MiddleRight2", "#adhVideo", ".yorumBox",
								  "iframe", ".detayHeader", ".kirilim", ".topBanner", ".date", ".breadC", ".controls2", ".detayTop .cls", "#Gad-646", "#MH", "#_etiketler",
								  "#Gad-79", "#sag"];
    //"#_MiddleLeft2","#_top","#_footer", "#_footerbottom","#_header",".katbar","#_topalt",".headerBottom", ".pager .nva",".kge.fLeft",".pagerBottom",".social_bar",".row.adn"

    var removeParentRowElementSelectors = [".pnwidget", "#Gad-4", ".videoDetay", ".oS"];

    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].parentNode.removeChild(iframes[i]);
    }

    $('head').append('<link rel="stylesheet" href="' + cssFile + '" type="text/css" />');


    $.each(removeElementSelectors, function (i, item) {
        $(item).remove();
    });


    $.each(removeParentRowElementSelectors, function (i, item) {
        var row = $(item).closest(".row");
        row.nextAll(".row").remove();
        row.remove();
    });

    for (var i = 21; i <= 25; i++) {
        $("head > script:nth-child(" + i + ")").remove();
    };

    for (var i = 5; i <= 9; i++) {
        $("#_body > script:nth-child(5)").remove();
    };

    $(".hCell").closest(".row").nextAll(".row").remove();


    //detay
    $("#_MiddleCenter2").append($(".share2"));
    $("div[itemprop='articleBody']").append($(".photos .diger"));
    $("table.image").remove();

    console.log("milliyet package end");

})();

function isRootPage() {
    return location.pathname == "/";
}

function getExtensionResource(filePath) {
    var scriptFileSrc = $("head script[src^='chrome-extension://']").attr("src");
    var extensionId = scriptFileSrc.replace("chrome-extension://", "").split('/')[0];
    return "chrome-extension://" + extensionId + filePath;
}

(function () {
    
    var isRootPage = location.pathname == "/";

    var cssFile = getExtensionResource("/packages/milliyet.com.tr/theme.css");

    var removeElementSelectors = [".bannerBar", ".dateBar", ".logoBar", ".cellA2", "#_bottom", "#_MiddleRight1", ".nav",
								  ".flashbar .box1 span", ".tagBar.new", "#_MiddleCenter1.colB", "#MansetImage11", "#_MiddleRight2", "#adhVideo", ".yorumBox",
								  "iframe", ".detayHeader", ".kirilim", ".topBanner", ".date", ".breadC", ".controls2", ".detayTop .cls", "#Gad-646", "#MH", "#_etiketler",
								  "#Gad-79", "#sag","#_top"];

    var removeParentRowElementSelectors = [".pnwidget", "#Gad-4", ".videoDetay", ".oS"];

    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].parentNode.removeChild(iframes[i]);
    }

    $('head').append('<link rel="stylesheet" href="' + cssFile + '" type="text/css" />');


    removeElements(removeElementSelectors);


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


    //haber detay sayfası
    $("#_MiddleCenter2").append($(".share2"));
    $("div[itemprop='articleBody']").append($(".photos .diger"));
    $("table.image").remove();

    //skorerhaber detaysayfası
    var isSkorerHaber = endsWith(location.pathname, "-skorerhaber/");
    if (isSkorerHaber) {
        removeElementSelectors = ["#_topalt.header","#_MiddleLeft1.top5M",".share",".prevnext","._amp.anketDet",".row.m0",".auth",".stv",".skorergaleri",".skorerblog"];
        removeElements(removeElementSelectors);
        $("#_Middle1").addClass("middle1-reformat");
        $(".dtyimg.bhorz").parent().parent().remove();
        $(".yorum-yaz").parent().remove();
    };

    //foto galeri
    if (location.pathname.indexOf("/fotogaleri/") == 0) {
        //removeElementSelectors = ["#_MiddleLeft2","#_top","#_footer", "#_footerbottom","#_header",".katbar","#_topalt",".headerBottom", ".pager .nva",".kge.fLeft",".pagerBottom",".social_bar",".row.adn"];
        //removeElements(removeElementSelectors);
    };

})();


function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function getExtensionResource(filePath) {
    var scriptFileSrc = $("head script[src^='chrome-extension://']").attr("src");
    var extensionId = scriptFileSrc.replace("chrome-extension://", "").split('/')[0];
    return "chrome-extension://" + extensionId + filePath;
}

function removeElements(removeElementSelectors) {
    $.each(removeElementSelectors, function (i, item) {
        $(item).remove();
    });
}
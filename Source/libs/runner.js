(function () {
    $.getJSON(getExtensionUrl('packages/config.json'), function (data) {
        var packages = data.packages;
        var locationDomain = getLocationDomain();

        $.each(packages, function (i, giPackage) {
            var packageFolder = "packages/" + giPackage.name + "/init.js";
            var runScript = false;

            $.each(giPackage.domains, function (i, domain) {
                if (domain.indexOf("*.") == 0) {
                    runScript = locationDomain == domain.substring(2, domain.lenght);
                }
                else {
                    runScript = location.host == domain;
                }
            });

            if (runScript) {
                $.getScript(getExtensionUrl(packageFolder));
                return false;
            };
        });
    });

    function getExtensionUrl(filePath) {
        return chrome.extension.getURL(filePath);
    }

    function getLocationDomain() {
        var host = location.host;
        if (host.indexOf("www.") == 0) {
            return host.substring(4, host.lenght);
        };
        return host;
    }

})();
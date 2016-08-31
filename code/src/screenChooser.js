var screenChooser = (function () {
    "use strict";
    var firstScreen = true;
    
    return {
        setFirstScreen: function (screen) { firstScreen = screen; },
        switchScreens: function () {
            var mainPage,
                firstPage;
            
            firstScreen = !firstScreen;
            if (firstScreen) {
                mainPage  = document.getElementById("mainPage");
                firstPage = document.getElementById("firstPage");
                mainPage.style.display  = "none";
                firstPage.style.display = "block";
            } else {
                mainPage  = document.getElementById("mainPage");
                firstPage = document.getElementById("firstPage");
                mainPage.style.display  = "block";
                firstPage.style.display = "none";
            }
        }
    };
}());
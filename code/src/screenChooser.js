var screenChooser = (function() { 
    var firstScreen = true;
    
    return {
        switchScreens: function() {
            firstScreen = !firstScreen;
            if (firstScreen) {
                var mainPage  = document.getElementById("mainPage");
                var firstPage = document.getElementById("firstPage");
                mainPage.style.display  = "none";
                firstPage.style.display = "block";
            } else {
                var mainPage  = document.getElementById("mainPage");
                var firstPage = document.getElementById("firstPage");
                mainPage.style.display  = "block";
                firstPage.style.display = "none";
            }
        }   
    };
})();
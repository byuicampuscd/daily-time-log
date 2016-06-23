var screenChooser = (function() { 
    var mainScreen = false;
    
    function saveTotalHours(totalHours) {
        scormHandler.saveTotalHours(totalHours);
    }
    
    return {
        switchScreens: function() {
            mainScreen = !mainScreen;
            if (mainScreen) {
                var mainPage  = document.getElementById("mainPage");
                var firstPage = document.getElementById("firstPage");
                mainPage.style.display = "block";
                firstPage.style.display = "none";
                
                // We were on screen 0 (or false) and now we should save the total hours
                saveTotalHours(document.getElementById("hours").value);
            } 
        },
    };
})();
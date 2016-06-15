var screenChooser = (function() { 
    var mainScreen = false;
    
    function saveTotalHours(totalHours) {
        scormHanlder.saveTotalHours(totalHours);
    }
    
    return {
        switchScreens: function(totalHours) {
            mainScreen = !mainScreen;
            if (mainScreen) {
                // We were on screen 0 (or false) and now we should save the total hours
                saveTotalHours(totalHours);
            } 
        },
    };
})();
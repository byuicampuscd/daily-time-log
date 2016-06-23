window.addEventListener('load',
    function() {
        if (scormHandler.exists()) {
            var firstPage = document.getElementById("firstPage");
            firstPage.style.display = "none";
            
            var currentHours = scormHandler.getCurrentHours();
            var totalHours   = scormHandler.getTotalHours();
            var percentage   = currentHours / totalHours;
            var numBadges    = 0;
            var index = 0;
            
            mapHandler.drawIcons();
        } else {
            var mainPage  = document.getElementById("mainPage");
            mainPage.style.display = "none";
        }
    },
false);


window.addEventListener('load',
    function() {
        if (scormHandler.exists()) {
            var currentHours = scormHandler.getCurrentHours();
            var totalHours   = scormHandler.getTotalHours();
            var percentage   = currentHours / totalHours;
            var numBadges    = 0;
            var index = 0;
            
            mapHandler.drawIcons();
        } else {
            
        }
    },
false);


var mapHandler = (function() {    
    return {
        drawMap: function(progressPercentage) {
            progressMap.startup("map", progressPercentage);
        },
        updateMap: function() { }
    };
})();
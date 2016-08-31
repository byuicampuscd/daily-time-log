var mapHandler = (function () {
    "use strict";
    return {
        drawMap: function (progressPercentage) {
            progressMap.startup("map", progressPercentage);
        },
        updateMap: function () { }
    };
}());
/* jslint browser: true */
var scormHandler = (function () {
    "use strict";
    var currentHours = null,
        totalHours   = null,
        entries      = [],
        SCORM        = false;
    
    return {
        exists:          function () { return SCORM; },
        getEntries:      function () { console.log(entries); return entries; },
        saveEntries:     function () { },
        getTotalHours:   function () { return totalHours; },
        saveTotalHours:  function () { },
        getCurrentHours: function () { return currentHours; },
        getSCORM: function () { SCORM = true; }
    };
}());
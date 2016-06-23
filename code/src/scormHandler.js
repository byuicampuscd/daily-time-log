var scormHandler = (function() {
    var currentHours = null;
    var totalHours   = null;
    var entries      = null;
    var SCORM        = false;
    
    return {
        exists:          function() { return SCORM; },
        getEntries:      function() { return entries; },
        saveEntries:     function(entries) { },
        getTotalHours:   function() { return totalHours; },
        saveTotalHours:  function(totalHours) { },
        getCurrentHours: function() { return currentHours; }
    };
})();
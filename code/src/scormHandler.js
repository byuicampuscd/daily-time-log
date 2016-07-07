var scormHandler = (function() {
    var currentHours = null;
    var totalHours   = null;
    var entries      = [];
    var SCORM        = false;
    
    return {
        exists:          function() { return SCORM; },
        getEntries:      function() { console.log(entries); return entries; },
        saveEntries:     function() { },
        getTotalHours:   function() { return totalHours; },
        saveTotalHours:  function() { },
        getCurrentHours: function() { return currentHours; },
        getSCORM: function() { SCORM = true; }
    };
})();
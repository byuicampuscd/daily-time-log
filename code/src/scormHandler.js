var scormHandler = (function() {
    var currentHours = null;
    var totalHours   = null;
    var entries      = null;
    
    return {
        exists:          function() { },
        getEntries:      function() { return entries; },
        saveEntries:     function(entries) { },
        getTotalHours:   function() { return totalHours; },
        saveTotalHours:  function(totalHours) { },
        getCurrentHours: function() { return currentHours; }
    };
})();
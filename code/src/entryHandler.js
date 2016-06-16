var entryHandler = (function() {
    var entries = scormHandler.getEntries();
    
    return {
        getEntries: function() { return entries; },
        createNewEntry: function(hours, date) { entries.push({ hours: hours, date: date}) },
        updateEntry: function(id, hours, date) { entries[id] = { hours: hours, date: date }; },
        saveEntries: function() { scormHandler.saveEntries(entries); };
    };
})();
var entityHandler = (function() {
    var entries = scormHandler.getEntries();
    
    return {
        createNewEntry: function(hours, date) { entries.push({ hours: hours, date: date}) },
        updateEntry: function(id, hours, date) { entries[id] = { hours: hours, date: date }; },
        saveEntries: function() { scormHandler.saveEntries(entries); };
    };
})();
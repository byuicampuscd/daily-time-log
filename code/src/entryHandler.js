/**
 * Buttons next to each entry that will call updateEntry. A form will exist for each form? We need to
 * associate which entry is being updated.
 * A button at the end of the entry list will call createNewEntry, which will dynamically add a new entry.
 **/

var entryHandler = (function() {
    var entries = scormHandler.getEntries();
    
    return {
        getEntries: function() { return entries; },
        createNewEntry: function() {
            
        },
        updateEntry: function(id, hours, date) {
            if (id <= entries.length) {
                entries[id] = { hours: hours, date: date }; 
            } else {
                entries.push({ hours: hours, date: date});
            }
        },
        saveEntries: function() { scormHandler.saveEntries(entries); }
    };
})();
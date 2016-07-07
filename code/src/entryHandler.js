/**
 * Buttons next to each entry that will call updateEntry. A form will exist for each form? We need to
 * associate which entry is being updated.
 * A button at the end of the entry list will call createNewEntry, which will dynamically add a new entry.
 **/

var entryHandler = (function() {
    var entries = [];
    
    return {
        getEntries: function() { return entries; },
        createNewEntry: function() {
            
        },
        updateEntry: function(id, hours, date) {
            if (id <= entries.length) {
                entries[id] = [ id, hours, date ]; 
            } else {
                entries.push([ id, hours, date ]);
            }
        },
        displayEntries: function() {
            var headerText = [ "Entry", "Hours Worked", "Date Entered/Updated" ]
            var entriesDiv = document.getElementById("entries");
            var table = document.createElement("table");
            var tbody = document.createElement("tbody");
            var row = document.createElement("tr");
            
            // Display Headers
            for (var i = 0; i < headerText.length; ++i) {
                var header = document.createElement("th");
                header.innerHTML = headerText[i];
                row.appendChild(header);
            }
            tbody.appendChild(row);
            
            // Display Entries
            for (var i = 0; i < entries.length; ++i) {
                row = document.createElement("tr");
                for (var j = 0; j < headerText.length; ++j) {
                    var cell = document.createElement("td");
                    cell.innerHTML = entries[i][j];
                    row.appendChild(cell);
                }
                tbody.appendChild(row);
            }
            
            // Display Button
            row = document.createElement("tr");
            row.colSpan = "3";
            var button = document.createElement("button");
            button.onclick = "";
            button.innerHTML = "Update";
            row.appendChild(button);
            
            tbody.appendChild(row);
            table.appendChild(tbody);
            entriesDiv.appendChild(table);
        },
        setEntries: function(entries) { entries = entries; }
    };
})();
/*jslint plusplus: true, browser:true */
/**
 * Buttons next to each entry that will call updateEntry. A form will exist for each form? We need to
 * associate which entry is being updated.
 * A button at the end of the entry list will call createNewEntry, which will dynamically add a new entry.
 **/

var entryHandler = (function () {
    "use strict";
    var entries = [];
    
    return {
        getEntries: function () { return entries; },
        createNewEntry: function () {
            
        },
        updateEntry: function (id, hours, date) {
            if (id <= entries.length) {
                entries[id] = [
                    { data: id, type: "HTML" },
                    { data: hours, type: "ELEMENT" },
                    { data: date, type: "HTML" }
                ];
            } else {
                entries.push([ id, hours, date ]);
            }
        },
        displayEntries: function () {
            var headerText = [ "Entry", "Hours Worked", "Date Entered/Updated" ],
                entriesDiv = document.getElementById("entries"),
                table = document.createElement("table"),
                tbody = document.createElement("tbody"),
                row = document.createElement("tr"),
                i,
                j,
                header,
                cell,
                input,
                newEntry,
                button;
            
            // Display Headers
            for (i = 0; i < headerText.length; ++i) {
                header = document.createElement("th");
                header.innerHTML = headerText[i];
                row.appendChild(header);
            }
            tbody.appendChild(row);
            
            // Display Entries
            for (i = 0; i < entries.length; ++i) {
                row = document.createElement("tr");
                for (j = 0; j < headerText.length; ++j) {
                    cell = document.createElement("td");
                    if (entries[i][j].type === "HTML") {
                        cell.innerHTML = entries[i][j].data;
                    } else if (entries[i][j].type === "ELEMENT") {
                        input = document.createElement("input");
                        input.value = entries[i][j].data;
                        cell.appendChild(input);
                    }
                    row.appendChild(cell);
                }
                tbody.appendChild(row);
            }
            
            // Display New Entry
            newEntry = document.createElement("input");
            newEntry.type = "text";
            
            row = document.createElement("tr");
            
            cell = document.createElement("td");
            cell.innerHTML = "Entry " + (i + 1);
            row.appendChild(cell);
            
            cell = document.createElement("td");
            cell.appendChild(newEntry);
            row.appendChild(cell);
            
            cell = document.createElement("td");
            row.appendChild(cell);
            
            tbody.appendChild(row);
            
            // Display Button
            row = document.createElement("tr");
            row.colSpan = "3";
            button = document.createElement("button");
            button.onclick = "";
            button.innerHTML = "Update";
            row.appendChild(button);
            
            tbody.appendChild(row);
            table.appendChild(tbody);
            entriesDiv.appendChild(table);
        },
        setEntries: function (newEntries) { entries = newEntries; }
    };
}());
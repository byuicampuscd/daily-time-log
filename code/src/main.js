/*jslint plusplus: true, browser:true */
/*global scormHandler, entryHandler, progressMap, screenChooser */

/*
    STEPS:
        1. Which screen should we load
        2. Main Screen
            1. Get total number of hours, current hours, and percentage
            2. Get the entries/Save the entries to entryHandler
            3. Display the entries
            4. Display Map
            5. Display Path
        3. First Screen
            1. Nothing
*/

function start() {
    // The firstScreen is opposite because screenChooser.switchScreens swaps it.
    // Main Screen
    "use strict";
    
    if (scormHandler.exists()) {
        var currentHours = scormHandler.getCurrentHours(),
            totalHours   = scormHandler.getTotalHours(),
            percentage   = currentHours / totalHours;
        
        entryHandler.setEntries(scormHandler.getEntries());
        entryHandler.displayEntries();
        
        if (percentage === null || percentage === undefined || isNaN(percentage)) {
            percentage = 0;
        }
        
        progressMap.startup("map", percentage);
        
        screenChooser.setFirstScreen(true);
    } else {
        screenChooser.setFirstScreen(false);
    }
    
    screenChooser.switchScreens();
}

function displayMap() {
    "use strict";
    progressMap.startup("map", percentage);
}

function displayEntries() {
    "use strict";
    var entries = scormHandler.getEntries(),
        i,
        entryDiv;
    
    for (i = 0; i < entries.length; ++i) {
        entryDiv = document.getElementById("entries");
        entryDiv.appendChild();
    }
}

function switchScreens() {
    "use strict";
    screenChooser.switchScreens();
    scormHandler.getSCORM();
    start();
}

function updateEntry() {
    "use strict";
    
}

function createNewEntry() {
    "use strict";
    
}

/*function saveTotalHours(totalHours) {
    scormHandler.saveTotalHours(totalHours);
}

saveTotalHours(document.getElementById("hours").value);*/

window.addEventListener('load', start, false);
/*
    <table>
        <tbody>
            <tr>
                <th>Entry</th>
                <th>Hours Worked</th>
                <th>Date Entered/Updated</th>
            </tr>
            
            <tr></tr> ... entries
            
            <tr colspan="3">
                <button onclick="">Update</button
            </tr>
        </tbody>
    </table>
*/
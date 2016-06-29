function start() {
    // Main Screen
    if (scormHandler.exists()) {
        screenChooser.firstScreen = true;
        
        displayMap();
    }
    // First Screen
    else {
        screenChooser.firstScreen = false;
    }
    
    screenChooser.switchScreens();
}

function displayMap() {
    var currentHours = scormHandler.getCurrentHours();
    var totalHours   = scormHandler.getTotalHours();
    var percentage   = currentHours / totalHours;
    
    progressMap.startup("map", percentage);
}

function displayEntries() {
    var entries = scormHandler.getEntries();
    
    for (var i = 0; i < entries.length; ++i) {
        var entryDiv = document.getElementById("entries");
        entryDiv.appendChild();
    }
}

function swtichScreens() {
    screenChooser.switchScreens();
    
    if (screenChooser.mainScreen) {
        displayMap();
    }
}

function updateEntry() {
    
}

function createNewEntry() {
    
}

function saveTotalHours(totalHours) {
    scormHandler.saveTotalHours(totalHours);
}

saveTotalHours(document.getElementById("hours").value);

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
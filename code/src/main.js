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
    if (scormHandler.exists()) {
        var currentHours = scormHandler.getCurrentHours();
        var totalHours   = scormHandler.getTotalHours();
        var percentage   = currentHours / totalHours;
        
        entryHandler.setEntries(scormHandler.getEntries());
        entryHandler.displayEntries();
        
        if (percentage == null || percentage == undefined || isNaN(percentage)) {
            percentage = 0;
        }
        
        progressMap.startup("map", percentage);
        
        screenChooser.setFirstScreen(true);
    }
    // First Screen
    else {
        screenChooser.setFirstScreen(false);
    }
    
    screenChooser.switchScreens();
}

function displayMap() {
    progressMap.startup("map", percentage);
}

function displayEntries() {
    var entries = scormHandler.getEntries();
    
    for (var i = 0; i < entries.length; ++i) {
        var entryDiv = document.getElementById("entries");
        entryDiv.appendChild();
    }
}

function switchScreens() {
    screenChooser.switchScreens();
    scormHandler.getSCORM();
    start();
}

function updateEntry() {
    
}

function createNewEntry() {
    
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
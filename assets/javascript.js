

var timeSlot = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "11PM"]
var eventsArray = ["", "", "", "", "", "", "", "", ""]
var schedule = $("#schedule")

if (localStorage.getItem("eventsArray")) {
    eventsArray = JSON.parse(localStorage.getItem("eventsArray"))
}

// Creating the rows for the text area
function renderSchedule() {
    for (var i = 0; i< 9; i++) {
        var newRow = $("<div>",).addClass("schedulerow").attr("id", timeSlot[i])

        var timeDiv = $("<div>").addClass("time")
        timeDiv.text(timeSlot[i])
        newRow.append(timeDiv)

        var eventDiv = $("<textarea>").addClass("event").attr("id", timeSlot[i] + "event")
        eventDiv.text(eventsArray[i])
        newRow.append(eventDiv)

        var saveButton = $("<button>").addClass("waves-effect waves-light btn-large blue darken-4").attr("id", timeSlot[i] + "waves-effect waves-light btn-large blue darken-4")
        saveButton.text("Save")
        newRow.append(saveButton)
        
        
        schedule.append(newRow)
    }
}

renderSchedule()

// saving to localstorage
function updateEvents() {
    if (event.target.getAttribute("class") === "waves-effect waves-light btn-large blue darken-4") {
        for (var i = 0; i< 9; i++) {
            eventsArray[i] = $("#" + timeSlot[i] + "event").val()
            localStorage.setItem("eventsArray", JSON.stringify(eventsArray))
        }
    }
}

schedule.click(updateEvents)

var timeSlot = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var eventsArray = ["", "", "", "", "", "", "", "", ""]
var schedule = $("#schedule")

if (localStorage.getItem("eventsArray")) {
    eventsArray = JSON.parse(localStorage.getItem("eventsArray"))
}


function renderSchedule() {
    for (var i = 0; i< 9; i++) {
        var newRow = $("<div>").addClass("schedulerow").attr("id", timeSlot[i])

        var timeDiv = $("<div>").addClass("time")
        timeDiv.text(timeSlot[i])
        newRow.append(timeDiv)

        var eventDiv = $("<textarea>").addClass("event").attr("id", timeSlot[i] + "event")
        eventDiv.text(eventsArray[i])
        newRow.append(eventDiv)

        var saveButton = $("<button>").addClass("save").attr("id", timeSlot[i] + "save")
        saveButton.text("Save")
        newRow.append(saveButton)
        
        
        schedule.append(newRow)
    }
}

renderSchedule()

function updateEvents() {
    if (event.target.getAttribute("class") === "save") {
        for (var i = 0; i< 9; i++) {
            eventsArray[i] = $("#" + timeSlot[i] + "event").val()
            localStorage.setItem("eventsArray", JSON.stringify(eventsArray))
        }
    }
}

schedule.click(updateEvents)
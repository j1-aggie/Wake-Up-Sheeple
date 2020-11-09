// Starter Code
var tableData = data;



// Variables
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");
var inputFieldCountry = d3.select("#country");
var inputFieldShape = d3.select("#shape");


var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
// console.log(columns);



// Input data into the HTML
var populate = (dataInput) => {
    dataInput.forEach(ufo_sightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column]))
    });
}

populate(data);


// Create an Event Listener for the Button
// Set up the Filter Button for inputs
button.on("click", () => {

    d3.event.preventDefault();


    var inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)

    var inputCity = inputFieldCity.property("value").toLowerCase().trim();
    // console.log(inputCity)

    var inputState = inputFieldState.property("value").toLowerCase().trim();
    // console.log(inputState)

    var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
    // console.log(inputCountry)

    var inputShape = inputFieldShape.property("value").toLowerCase().trim();
    // console.log(inputShape)

    var filterDate = data.filter(data => data.datetime === inputDate);
    // console.log(filterDate)
    var filterCity = data.filter(data => data.city === inputCity);
    // console.log(filterCity)
    var filterState = data.filter(data => data.state === inputState);
    // console.log(filterState)
    var filterCountry = data.filter(data => data.country === inputCountry);
    // console.log(filterCountry)
    var filterShape = data.filter(data => data.shape === inputShape);
    // console.log(filterShape)

    var filterCombinedData = data.filter(data => data.datetime === inputDate && data.city === inputCity && data.state === inputState && data.country === inputCountry && data.shape === inputShape);
    // console.log(filterCombinedData)

    $tbody.html("");

    let response = {
        filterDate,
        filterCity,
        filterState,
        filterCountry,
        filterShape,
        filterCombinedData
    }

    if (response.filterCombinedData.length !== 0) {
        populate(filterCombinedData);
    } else if (response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0 || response.filterState.length !== 0 || response.filterCountry.length !== 0 || response.filterShape.length !== 0))) {
        populate(filterDate) || populate(filterCity) || populate(filterState) || populate(filterCountry) || populate(filterShape);
    } else {
        $tbody.append("tr").append("td").text("No Aliens Here!");
    }
})


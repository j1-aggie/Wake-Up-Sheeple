// Starter Code
var tableData = data;


// Viewing the available data fromt he data.js
// console.log(tableData);


// Creating References
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");
var inputFieldCountry = d3.select("#country");
var inputFieldShape = d3.select("#shape");
var resetbtn = d3.select("#reset-btn");


var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
// console.log(columns);



// Input data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column]))
    });
}

addData(tableData);


// Create an Event Listener for the Button
// Set up the Filter Button for Date and City
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

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    // console.log(filterDate)
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    // console.log(filterCity)
    var filterState = tableData.filter(tableData => tableData.state === inputState);
    // console.log(filterState)
    var filterCountry = tableData.filter(tableData => tableData.country === inputCountry);
    // console.log(filterCountry)
    var filterShape = tableData.filter(tableData => tableData.shape === inputShape);
    // console.log(filterShape)

    var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity && tableData.state === inputState && tableData.country === inputCountry && tableData.shape === inputShape);
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
        addData(filterCombinedData);
    } else if (response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0 || response.filterState.length !== 0 || response.filterCountry.length !== 0 || response.filterShape.length !== 0))) {
        addData(filterDate) || addData(filterCity) || addData(filterState) || addData(filterCountry) || addData(filterShape);
    } else {
        $tbody.append("tr").append("td").text("No Aliens Here! Keep Searching: ");
    }
})

resetbtn.on("click", () => {
    tbody.html("");
    populate(data)
    console.log("Table reset")
})
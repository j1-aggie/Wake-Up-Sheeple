// from data.js
var tableData = data;

// Select the table body
var tbody = d3.select("tbody")

// loop through data and append rows to the table body

tableData.forEach(function (ufo) {
    var row = tbody.append("tr"):
        // use append method to insert table data for each row
        Object.entries(ufo).forEach(function ([key, value]) {
            //console.log(key, value)
            //use text to insert data to each cell
            var cell = row.append("td").text(value);
        });

});

// select the button and create function
var button = d3.select("#filter-btn");
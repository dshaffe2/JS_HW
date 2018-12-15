var tableData = data;
var tbody = d3.select("tbody");
console.log(tbody);

data.forEach((alien) => {
  var row = tbody.append("tr");
  Object.entries(alien).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  })
})

var button = d3.select("#filter-btn");

function handleClick() {
  d3.selectAll("td").text("");
  d3.event.preventDefault();
  console.log("Submit button was clicked");
  console.log(d3.event.target);

  var inputDate = d3.select("#datetime").property("value");
  console.log(inputDate);
  var inputCity = d3.select("#citySelect").property("value");
  console.log(inputCity);
  var inputState = d3.select("#stateSelect").property("value");
  console.log(inputState);
  var inputCountry = d3.select("#countrySelect").property("value");
  console.log(inputCountry);
  var inputShape = d3.select("#shapeSelect").property("value");
  console.log(inputShape);

  var dataFiltered = data.filter((x => x.datetime === inputDate) || (x => x.city === inputCity) || (x => x.state === inputState) || (x => x.country === inputCountry) || (x => x.shape === inputShape));
  dataFiltered.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    })
  })
}

button.on("click", handleClick);

var OPEN_WEATHER_MAP_API = "https://circuits-api.generalassemb.ly/8737fcf3-6a39-4548-a324-209d535e59fd?q=";
var resultElement = $("#result");

function callOpenWeatherMap(city) {

    if (city.length == 0) {$("#result").html("Please enter a city name into the search field");} 
  
    else {

        $.get(OPEN_WEATHER_MAP_API + city, function(searchResult) {
            var stringOutput;
            var celsiusTemp = toCelsius(searchResult.main.temp);
            stringOutput = "<p>"+ searchResult.name + "<br>"; 
            stringOutput += celsiusTemp + " C" + "<br>"; 
            stringOutput +="</p>";
            resultElement.html(stringOutput);
        });

    }

}

function toCelsius(kelvinTemp) {
  var temp = Math.round(kelvinTemp - 273.15);
  return temp;
}

$("#searchBtn").on('click', function (event){
    event.preventDefault(); 

    callOpenWeatherMap($("#searchField").val());
});
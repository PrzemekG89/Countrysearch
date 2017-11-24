var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var countriesFound;
var countriesInfo;

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        countriesFound = $('<li>').text(item.name).appendTo(countriesList).addClass("country col-md-4 col-sm-12");
        countriesInfo = $('<ul>').text('Background information').appendTo(countriesFound).addClass("information");
        $('<li>').text('Capital: ' + item.capital).appendTo(countriesInfo);
        $('<li>').text('Population: ' + item.population).appendTo(countriesInfo);
        $('<li>').text('Area: ' + item.area + ' km2').appendTo(countriesInfo);
    });
};
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return ("".concat(city, " is in ").concat(country, "."));
}
// Call  function for three different cities, at least one of which is not in the default country
var city1 = describe_city("Karachi");
var city2 = describe_city("Islamabad");
var city3 = describe_city("Baku");
console.log(city1);
console.log(city2);
console.log(city3);

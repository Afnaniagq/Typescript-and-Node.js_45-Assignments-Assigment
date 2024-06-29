"use strict";
function describe_cites(city, country = "Pakistan") {
    console.log(`"${city}" is in ${country}`);
}
describe_cites("Karachi");
describe_cites("Lahore");
describe_cites("Turkey", "Istanbul");

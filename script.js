// Team heySui
// Shannon Lau and Jen Yu
// SoftDev2 pd7
// K12 - Medallions...of Data!
// 2018-03-20

var usMedals = [9, 8, 6];
var skMedals = [5, 8, 4];
var curr = usMedals;

var svg = document.getElementById("svg");
var heading = document.getElementById("heading");
var switchButton = document.getElementById("switch");

var switchCountry = function(country, data){
    d3.selectAll("circle").data(data).attr("r", function(d){return 10 * d});
    d3.selectAll("text").data(data).html(function(d){return d});
    heading.innerHTML = country;
}

var buttonCallBack = function(e){
    if (curr == usMedals){
      switchCountry("South Korea", skMedals)
    }
    else {
    	switchCountry("United States", usMedals)
    }
}

switchButton.addEventListener("click", buttonCallBack);

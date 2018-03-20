// Team heySui
// Shannon Lau and Jen Yu
// SoftDev2 pd7
// K12 - Medallions...of Data!
// 2018-03-20

var us_medals = [9, 8, 6];
var russia_medals = [5, 8, 4];
var curr = us_medals;

var svg = document.getElementById("svg");
var heading = document.getElementById("heading");
var switch = document.getElementById("switch");

var set = function(country, data){
    d3.selectAll("circle").data(data).attr("r", function(d){return 10 * d});
    d3.selectAll("text").data(data).html(function(d){return d});
}

var buttonCallBack = function(e){
    if (curr == US_medal_count){
    	heading.innerHTML = "South Korea";
    	curr = SK_medal_count;
    }
    else if (data == SK_medal_count){
	heading.innerHTML = "US";
	data = US_medal_count;
    }
      set();
}

switch.addEventListener("click", buttonCallBack);

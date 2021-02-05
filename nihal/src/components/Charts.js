var unirest = require("unirest");

var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts");

req.query({
	"symbol": "HYDR.ME",
	"interval": "5m",
	"range": "1d",
	"region": "US",
	"comparisons": "^GDAXI,^FCHI"
});

req.headers({
	"x-rapidapi-key": "f1567ee71emsh6ebf2858e9db922p1be8a0jsnc09115c90856",
	"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

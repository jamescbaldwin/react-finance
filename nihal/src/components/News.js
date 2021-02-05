
var unirest = require("unirest");

var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details");

req.query({
	"uuid": "9803606d-a324-3864-83a8-2bd621e6ccbd",
	"region": "US"
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

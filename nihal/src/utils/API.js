import axios from "axios";

let API = {
    getStocks: function(searchString) {
        return axios({
            "method":"GET",
            "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete",
            "params":{"q":searchString, "region":"US"},
            "headers": {
                "x-rapidapi-key": "f1567ee71emsh6ebf2858e9db922p1be8a0jsnc09115c90856",
	            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	            "useQueryString": true
                }});
    }
};

export default API;

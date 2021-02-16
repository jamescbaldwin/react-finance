import axios from "axios";

let API = {
    getStocks: function(searchString) {
        return axios({
            "method":"GET",
            "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete",
            "params":{"q":searchString, "region":"US"},
            "headers": {
                "x-rapidapi-key": "93314b40c4mshce0ff14b4532853p1138fdjsnaf652843c795",
	            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	            "useQueryString": true
                }});
    }
};

export default API;
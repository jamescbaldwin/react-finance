import React, { Component } from "react";
import API from "../utils/API";
import Quotes from "./Quotes";
import News from "./News";
import Chart from "./Charts";

class Data extends React.Component {
state = {
    apiData: [],
    apiNews :[],
    apiCharts :[]
}
componentDidMount() {
    API.getStocks("tesla")
    .then(res => {
        console.log(res);
        let apiData = []
        let apiNews = []
        for (let i = 0; i < res.data.quotes.length; i++) {
           let record = {
                name : res.data.quotes[i].shortname,
                symbol: res.data.quotes[i].symbol,
                score: res.data.quotes[i].score
            }
            apiData.push(record)   
        }

        for (let j = 0; j < res.data.news.length; j++) {
            let content = {
                link: res.data.news[j].link,
                title: res.data.news[j].title,
                publisher: res.data.news[j].publisher
            }
            apiNews.push(content)
        }
        
        for (let k = 0; k < res.data.charts.length; k++) {
           let record = {
                name : res.data.symbol[i].symbol,
                interval: res.data.interval[i].interval,
                
            }
            apiData.push(record)   
        }

        this.setState({ apiData: apiData });
        this.setState({ apiNews: apiNews });
        this.setState({ apiCharts: apiCharts });
    })
    .catch(err => console.log(err));
}
    render() {
        return (
        <div>  
            {this.state.apiData.map( (rec,key) => <Quotes
             name= {rec.name}
             symbol ={rec.symbol}
             score = {rec.score}
             key={key}/>)}   
                
       </div> 
       )
}
}

export default Data;

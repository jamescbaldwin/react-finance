import React from 'react';
import API from "../../utils/API";


class Searchbar extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
      results: {},
      loading: false,
      message: '',
		};
  }
  handleOnInputChange = (event) => {
    const query = event.target.value;
			  this.setState({ query } );
			  API.getStocks({ query })
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
		  
				  this.setState({ apiData: apiData });
				  this.setState({ apiNews: apiNews });
			  })
			  .catch(err => console.log(err));
  };
	render() {
		return (
			<div>
		
				<label className="search-label" htmlFor="search-input">
					<input
                        className="search"
						type="text"
						value={this.state.query}
						id="search-input"
                        placeholder="Search..."
						onChange={this.handleOnInputChange}>
							
						</input>
					<i className="fa fa-search search-icon"/>
				</label>
				
			</div>
			)
	}
}
export default Searchbar;
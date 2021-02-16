import React from 'react';
import API from "../../utils/API";

import { Component, state, setState } from 'react';

class Searchbar extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query:'',
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
			<div className="container">
				{/*Heading*/}
			
				{/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value=""
						id="search-input"
						placeholder="Search..."

					/>
					<i className="fa fa-search search-icon"/>
				</label>
				
			</div>
			)
	    }
    }
export default Searchbar;

// import React, { Component } from "react";
// import DataTable from "./DataTable";
// import Nav from "./NavBar";
// import API from "../utils/API";

// // handles the data, and creates the sorting functions 
// export default class DataArea extends Component {
//   state = {
//     users: [{}],
//     order: "descend",
//     filteredUsers: [{}]
//   }


//   handleSort = heading => {
//     if (this.state.order === "descend") {
//       this.setState({
//         order: "ascend"
//       })
//     } else {
//       this.setState({
//         order: "descend"
//       })
//     }

//     const compareFnc = (a, b) => {
//       if (this.state.order === "ascend") {
//         // account for missing values
//         if (a[heading] === undefined) {
//           return 1;
//         } else if (b[heading] === undefined) {
//           return -1;
//         }
        
//         else if (heading === "name") {
//           return a[heading].first.localeCompare(b[heading].first);
//         } else {
//           return a[heading] - b[heading];
//         }
//       } else {
  
//         if (a[heading] === undefined) {
//           return 1;
//         } else if (b[heading] === undefined) {
//           return -1;
//         }
 
//         else if (heading === "name") {
//           return b[heading].first.localeCompare(a[heading].first);
//         } else {
//           return b[heading] - a[heading];
//         }
//       }

//     }
//     const sortedUsers = this.state.filteredUsers.sort(compareFnc);
//     this.setState({ filteredUsers: sortedUsers });
//   }

//   handleSearchChange = event => {
//     console.log(event.target.value);
//     const filter = event.target.value;
//     const filteredList = this.state.users.filter(item => {
//       // merge data together, then see if user input is anywhere inside
//       let values = Object.values(item)
//         .join("")
//         .toLowerCase();
//       return values.indexOf(filter.toLowerCase()) !== -1;
//     });
//     this.setState({ filteredUsers: filteredList });
//   }

//   componentDidMount() {
//     API.getUsers().then(results => {
//       this.setState({
//         users: results.data.results,
//         filteredUsers: results.data.results
//       });
//     });
//   }

//   render() {
//     return (
//       <>
//         <Nav handleSearchChange={this.handleSearchChange} />
//         <div className="data-area">
//           <DataTable
//             headings={this.headings}
//             users={this.state.filteredUsers}
//             handleSort={this.handleSort}
//           />
//         </div>
//       </>
//     );
//   }
// }


//   handleOnInputChange = (event) => {
//     const query = event.target.value;
// 			  this.setState({ query } );
// 			  API.getStocks({ query })
// 			  .then(res => {
// 				  console.log(res);
// 				  let apiData = []
// 				  let apiNews = []
// 				  for (let i = 0; i < res.data.quotes.length; i++) {
// 					 let record = {
// 						  name : res.data.quotes[i].shortname,
// 						  symbol: res.data.quotes[i].symbol,
// 						  score: res.data.quotes[i].score
// 					  }
// 					  apiData.push(record)   
// 				  }
		  
// 				  for (let j = 0; j < res.data.news.length; j++) {
// 					  let content = {
// 						  link: res.data.news[j].link,
// 						  title: res.data.news[j].title,
// 						  publisher: res.data.news[j].publisher
// 					  }
// 					  apiNews.push(content)
// 				  }
		  
// 				  this.setState({ apiData: apiData });
// 				  this.setState({ apiNews: apiNews });
// 			  })
// 			  .catch(err => console.log(err));
//   };
// 	render() {
// 		return (
// 			<div>
		
// 				<label className="search-label" htmlFor="search-input">
// 					<input
//                         className="search"
// 						type="text"
// 						value={this.state.query}
// 						id="search-input"
//                         placeholder="Search..."
// 						onChange={this.handleOnInputChange}>
							
// 						</input>
// 					<i className="fa fa-search search-icon"/>
// 				</label>
				
// 			</div>
// 			)
// 	}
// }
// export default Searchbar;
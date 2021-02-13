import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();


// props here is adding our cards created to wrap around the api news context
export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "add api key";

  useEffect(() => {
    axios
      .get(
        //   add url with api key attached at the end. Example below
        `http://newsapi.org/v2/everything?q=rich&from=2020-07-19&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

// Notes
// Need to install axios
// in app.js import the NewsContextProvider sidenote: download auto important and use 
// news context provider in a div and it will auto import into app.js
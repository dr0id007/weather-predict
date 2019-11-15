import Axios from "axios";
import Card from "../stateless/news-card";

const fetch = async data => {
  console.log("data:-", data);
  // const key = process.env.REACT_APP_APIKEY;
  const key = "24d9fc782dec45cfa9a201e6e33cf177";

  let url = "";
  url = "https://newsapi.org/v2/everything?q=" + data + "&apiKey=" + key;
  let da = await Axios.get(url)
    .then(data => {
      return data.data.articles;
    })
    .then(data => {
      const value = data.map(key => {
        return Card(key);
      });
      return value;
    })
    .catch(error => {
      console.log("error", error);
    });
  return da;
};

export default fetch;

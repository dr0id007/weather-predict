import Axios from "axios";

const fetch = async (state, year) => {
  const result = await Axios.post("http://localhost:5000/predict", {
    State: state[0],
    Year: year[0]
  });
  console.log("result:-", result);
  return result;
};

export default fetch;

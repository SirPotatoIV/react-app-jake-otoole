// import axios from "axios";
import jsonData from "./fakeData.json";

const jsonConversion = async function () {
  const test = jsonData[0];
  console.log(test);
  // fs.readFile("./fakeData.json", function (err, data) {
  //   console.log(data);
  //   console.log(err);
  // });
};

// const getJsonFromLink = async function () {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     console.log(response);
//   } catch (error) {}
//   console.log("hello");
// };

export { jsonConversion };

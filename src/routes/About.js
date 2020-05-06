import React, { useEffect, useState } from "react";
import axios from "axios";

// All the code in here was to test and see if I could get a file from a GitHub repo
// ... render that data in my application
// -- I am using the GitHub api to get the download url of a specific file
// -- I am downloading that file and storing it in state

function About() {
  const [data, setData] = useState([]);
  async function getGithub() {
    let downloadURL = "";
    try {
      const response = await axios.get(
        "https://api.github.com/repos/SirPotatoIV/react-app-jake-otoole/contents/src/utils/fakeData.json"
      );
      // console.log(response);
      downloadURL = response.data.download_url;
      // console.log(downloadURL);
    } catch (error) {
      console.log(error);
    }

    try {
      const jsonData = await axios.get(downloadURL);
      console.log(jsonData);
      setData(jsonData.data);
    } catch (error) {
      console.log("error occurred downloading JSON", error);
    }
  }
  useEffect(function () {
    getGithub();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <h1>Data Not Found</h1>
      ) : (
        data.map(function (element) {
          return <h2 key={element.id}>{element.title}</h2>;
        })
      )}
    </div>
  );
}

export default About;

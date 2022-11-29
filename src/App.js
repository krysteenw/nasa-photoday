import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=jKZEOlMcSeVRweDLPL78IFy2jllJVueaoNmaqoZy";
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return (
    <div className="App">
      <div className="header">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div className="body">
        <div style={{ margin: "20px" }}>
          <h1>{data.title}</h1>

          <p>{data.explanation}</p>
        </div>
        <img style={{ width: "50vw" }} src={data.hdurl} />
      </div>
    </div>
  );
}

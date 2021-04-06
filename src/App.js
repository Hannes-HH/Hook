import {  useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Hello React");
  useEffect(() => {setMessage("Hallo neue Fische")} )
  

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;

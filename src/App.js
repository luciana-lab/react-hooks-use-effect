import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // side effect function
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  // By default, useEffect will run our side effect function EVERY TIME the component re-renders.
  // render -> useEffect -> setState -> re-render -> useEffect

  // 2nd argument [count]: side effect will run ANY TIME the count VARIABLE CHANGES
  // 2nd argument [] empty array: side effect will ONLY run the FIRST TIME our component renders

  // Fetch example:
  // 2nd argument [] empty array to prevent an infinite loop (will only run the 1st time)
  // render -> useEffect -> setImages -> render 

  // useEffect(() => {
  //   fetch("https://dog.ceo/api/breeds/image/random/3")
  //     .then(resp => resp.json())
  //     .then(data => setImages(data.messages))
  // }, [])

  useEffect(() => {
    document.title = text
  }, [text])

  useEffect(() => {
    setTimeout(() => setCount(0), 5000)
  }, [])


  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>I've been clicked {count} times</button>
      <input type="text" placeholder="Type away..." value={text} onChange={e => setText(e.target.value)} />
    </div>
  )
}

export default App;

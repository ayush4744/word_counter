import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updateWordCount(newText);
  };

  const updateWordCount = (str) => {
    const words = str.trim().split(/\s+/);
    const wordCount = words.length;
    setWordCount(wordCount);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Type your text here..."
        ></textarea>
        <div id="word-counter">Word Count: {wordCount}</div>
      </div>
    </div>
  );
}

export default App;

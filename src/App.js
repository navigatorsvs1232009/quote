import React, { useEffect, useState } from "react";
import './App.css';




function App() {

  const [Quote, setQuote] = useState({});
  useEffect(() => newQuote(), []);
  function newQuote() {
    fetch("https://cyf-quote-backend.herokuapp.com/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }

  return (
    <div className="App">
      <header className="App-header">
<div id="quote-box">
  <div id="text"><a href="twitter.com/intent/tweet" id="tweet-quote">{Quote.quote}
</a></div>
  <div id="author">Author : {Quote.author}</div>
  <button class="btn"
      className="button"
      onClick={() => newQuote()}>quote</button>
</div>

       
      </header>
    </div>
  );
}

export default App;

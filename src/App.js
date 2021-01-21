import React, { useState } from "react";
import "./styles.css";
var heading = "insiide out";
var emojiDict = {
  "🥨": "Pretzel",
  "🥴": "Woozy Face",
  "🧆": "Falafel",
  "🧮": "Abacus",
  "🧇": "Waffle",
  "🛶": "Canoe"
};
var emojiWeKnow = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputHandler(event) {
    var emoji = event.target.value;
    if (emoji in emojiDict) {
      setMeaning(emojiDict[emoji]);
    } else {
      setMeaning("Cannot find in database!");
    }
  }
  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDict[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>{heading}</h1>
      <input
        onChange={inputHandler}
        style={{ minWidth: "80%", padding: "1rem 1rem" }}
        placeholder="Enter the given emoji"
      />
      <div style={{ padding: "1rem" }}>{meaning}</div>
      <h3>Emojis We Know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              paddingRight: "1rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

import React, { useState } from "react";

function WordCounter() {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    const countWords = () => {
        const words = text.trim().split(/\s+/);
        let numWords;
        if (text.trim() === "") {
            numWords = 0;
        } else {
            numWords = words.length;
        }
        setWordCount(numWords);
    };

    return (
        <div style={{ textAlign: "center", width: "min-content", padding: "15px", margin: "20px auto", borderRadius: "15px", boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)", }}    >
            <h1 style={{ fontWeight: "bold" }}>Responsive Paragraph Word Counter</h1>
            <br />
            <textarea id="inputField" rows="10" cols="60" value={text} onChange={e =>setText(e.target.value) } onKeyUp={countWords} placeholder="Type your text here..." />
            <br />
            <br />
            <p>Word Count: <span id="show">{wordCount}</span></p>
        </div>
    );
}

export default WordCounter;

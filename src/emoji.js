import { useState } from "react";
import "./emoji.css";

var emojiDB = { 
	"🍇": "Grapes",
	"🍎": "Apple",
	"🍌": "Banana",
	"🍓": "Strawberry",
	"🥭": "Mango",
	"🍍": "Pineapple",
	"🥝": "Kiwi",
	"🍐": "Pear",
	"🍉": "Watermelon",
	"🍊": "Orange"
};

var emojisWeKnow = Object.keys(emojiDB);  

export default function App() {
	const [meaning, setMeaning] = useState("");

	function emojiInputHandler(event) {
		var userInput = event.target.value; 
		var meaning = emojiDB[userInput]; 

		if (meaning === undefined) {
			meaning = "Not in our database. Try again!"; 
		}

		setMeaning(meaning);
	}

	function emojiClickHandler(emoji) {
		var meaning = emojiDB[emoji];
		setMeaning(meaning);
	}

	return (
		<div className="App">
			<h1 class="mod">What's my Emoji</h1>
			<input onChange={emojiInputHandler} placeholder={"Enter your emoji here..."} style = {{marginBottom: "2rem"}}/> 
			<h2>{meaning}</h2> 

			<h3>Emojis we know</h3>
			{
				emojisWeKnow.map((emoji) => <span 
				onClick = {() => emojiClickHandler(emoji)}
		

				style = {{fontSize: "2rem", padding: "0.5rem", cursor: "pointer"}} 
				key={emoji}> {emoji}
				</span>) 
			}
		</div>
	);
}

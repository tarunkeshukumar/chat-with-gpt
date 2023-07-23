
import { useState } from 'react';
import './App.css';
import { sendMessageToOpenAI } from './openai';
function App() {
  const [input,setInput] = useState("");
  const [messages,setMessages] = useState([]);

  const handleSend = async () => {
    const response = await sendMessageToOpenAI(input);
    setMessages([
      ...messages ,
      {text: input, isUser: true},
      {text: response, isUser: false},
    ]);
    setInput("");
    
  }

  return (
    <div className="App">
    <h1>Chat-With-GPT</h1>
      <div className="Chat">
         {messages.map((message, index) => (
            <div key={index} className=
              {message.isUser ? "user-message":"bot-message"}>{message.text}
            </div>
          ))}
        </div> 
      

      <div className="input-container">
        <input 
        placeholder="Ask a question..."
        type="text" value={input} 
        onChange={e=> setInput(e.target.value)}></input>
        <button onClick = {handleSend} type="submit"> Send</button>
      </div>
         </div>
  );
}

export default App;
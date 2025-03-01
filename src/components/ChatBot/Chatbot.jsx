import React, { useState } from "react";
import axios from "axios";
import { Send, MessageCircle } from "lucide-react";

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with your actual API key

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyASjWoTcoMByVcaAIjP74ew2PNAu0sjTuc`,
        {
          contents: [{ parts: [{ text: input }] }],
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const aiResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
      setMessages([...newMessages, { text: aiResponse, sender: "bot" }]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages([...newMessages, { text: "Error reaching AI service.", sender: "bot" }]);
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px",
          borderRadius: "50%",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
        onClick={() => setShowChat(!showChat)}
      >
        <MessageCircle size={24} />
      </div>

      {/* Chat Window */}
      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            border: "1px solid #ccc",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            AI Chatbot
          </div>
          <div
            style={{
              height: "250px",
              padding: "10px",
              overflowY: "auto",
              flexGrow: 1,
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "8px",
                  padding: "8px",
                  borderRadius: "5px",
                  backgroundColor: msg.sender === "user" ? "#d1e7fd" : "#e0e0e0",
                  textAlign: msg.sender === "user" ? "right" : "left",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              borderTop: "1px solid #ccc",
            }}
          >
            <input
              type="text"
              style={{
                flex: 1,
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "8px",
                outline: "none",
              }}
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              style={{
                marginLeft: "10px",
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
              }}
              onClick={sendMessage}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

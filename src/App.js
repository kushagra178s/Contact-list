import React from "react";
import './style.css'
import './normal.css'
function App() {
  return (
    <>
    <div className="app">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-input-holder">
          <textarea placeholder="type your query here" name="" id="" cols="30" rows="10" className="chat-input-textarea"></textarea>
        </div>
      </section>
    </div>
    </>
  );
}
export default App;

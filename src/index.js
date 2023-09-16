import React from "react";
import ReactDOM from "react-dom";
import Head from "./components/header"
import Footer from "./components/footer"

let w={
  width:"3rem",
  height:"auto",
  padding:"20px",
  borderRadius:"10px",
  backgroundColor:"white"
}
ReactDOM.render(
   <div>
    
    <Head/>
      <div className="note">
        <h3>This is the note title</h3>
        <p>This is the note content</p>
      </div>
    <Footer/>
  </div>,
    document.getElementById("root")
  )
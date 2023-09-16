import React from "react"
import ReactDom from "react-dom"
let d=new Date().getFullYear()
let s={
    position:"absolute",
    bottom:"0",
    width:"100%",
    textAlign:"center"
    
}
function Footer(){
    return (
    <div >
     <footer style={s}>Copyright © {d} </footer>
    </div>)
}
export default Footer
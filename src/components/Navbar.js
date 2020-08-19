import React from "react";
import tallyMarks from 'tally-marks';

const style = {
  bgDark: {
    backgroundColor: '#0000',
    padding: 3,
    float: "right",
    fontSize: 22,
    marginBottom: 0,
    marginTop: 3
  }
}

const headerStyle = {
    float: "left"
}

const imageStyle = {
    height: 100
}

const NavBar = props => (
  <header style={style.bgDark} className="alight-right w-100 mb-0">
      <p style = {headerStyle}>Yssabel Pangilinan<br/> Web Development 1st Period <br/> 08/18/2020</p>
    <nav className="f6 fw6 ttu tracked">
      <p style = {style.bgDark} className="link dim white dib mr3" title="Store">
          <b>Score:</b> {tallyMarks(props.currentScore)}  <br/>  
          <b>Top Score:</b> {tallyMarks(props.topScore)} <br/> 
          <b>Grade:<img alt = "grade" style = {imageStyle} src = {props.grade}/></b> </p>
    </nav>
  </header>
)

export default NavBar;
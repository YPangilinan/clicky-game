import React from "react";

const style = {
  bgDark: {
    backgroundColor: '#0000',
    padding: 3,
    float: "right",
    fontSize: 20,
    marginBottom: 0,
    marginTop: 3
  }
}

const headerStyle = {
    float: "left"
}

const NavBar = props => (
  <header style={style.bgDark} className="alight-right w-100 mb-0">
      <p style = {headerStyle}>Yssabel Pangilinan<br/> Web Development 1st Period <br/> 08/18/2020</p>
    <nav className="f6 fw6 ttu tracked">
      <p style = {style.bgDark} className="link dim white dib mr3" title="Store"><b>Score:</b> {props.currentScore}  |  <b>Top Score:</b> {props.topScore}</p>
    </nav>
  </header>
)

export default NavBar;
import React from 'react'

export default function Header(props) {
    return (
        <div style = {styleDoodle}>
      <h2 className="link dim white dib mr3" ><b>{props.status}</b></h2>
      <p className="fw2 f4 lh-copy mt0 mb3 white animated fadeIn slower">
    Click on an image to earn points, but don't click on any more than once!
    </p>
        </div>
    )
}

const styleDoodle = {
    textAlign: "center"
}

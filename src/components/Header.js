import React from 'react';

export default function Header(props) {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div style={styleDoodle}>
                    <h2 className="link dim white dib mr3" ><b><u>{props.status}</u></b></h2>
                    <p className="fw2 f4 lh-copy white animated fadeIn slower">
                        Get that A+! Click on an image to earn your extra credit, but don't click on any more than once or you'll fail!
                    </p>
                </div>
            </div>
        </div>

    )
}

const styleDoodle = {
    textAlign: "center",
    marginTop: 0
}

import React, { useState } from "react";

function ImageCard(props){
    const [hovered, setHover] = useState(true);
    return(
        <section id={props.id} className="tc pa3 hvr-float-shadow" value={props.id} onClick={() =>
            props.clickedPlayer(props.id)
            }>
              <article className="w4 pa2 ">
                <img style = {styleCard} src={props.image} onMouseEnter = {() => setHover(true)} onMouseOut = {() => setHover(false)} className={hovered ? "animated swing" : "null"} alt="game-char" id= "img"/>
              </article>
        </section>
    )
}

const styleCard = {
    width: 180
}

export default ImageCard;
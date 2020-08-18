import React from "react";

function ImageCard(props){
    return(
        <section id={props.id} className="tc pa3 hvr-float-shadow animated zoomInUp" value={props.id} onClick={() =>
            props.clickedPlayer(props.id)
            }>
              <article className="w4 pa2 ">
                <img style = {styleCard} src={props.image} className="db" alt="game-char" />
              </article>
        </section>
    )
}

const styleCard = {
    width: 180
}

export default ImageCard;
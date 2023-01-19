import React from "react";
// import katiezaferes from "../images/katie-zaferes.png"

// propriedades podem ser passadas como um objeto, nao sendo necessario chamar o "props".Assim: {prop1, prop2, prop3}. os nomes dessas props sao definidas em App.js

// Para tratar properties que eventualmente podem vir vazias, envolver a tag com colchetes e escrever a condiçao. 

// Ex:
// a condiçao pode ser o proprio parametro
//     {condicao && <h1>valor: {props.prop1}</h1>}

// Outra forma ex:

// style={{display: props.prop1 ? "block" : "none"}}

// Para passar outros valores como propriedade que nao sejam string, usar as chaves.Ex:

// <Componente propriedade={true} />


export default function Card(props) {

    let badgeText

    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (

        // {props.nome} chamará a propriedade
        <div className="card">

            {/* Se condicao verdadeira, entao renderiza div */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            {/* <img  src={props.img} className="card--image" alt="not-found"/> */}
            <img src={`./images/${props.coverImg}`} className="card--image" alt="not-found" />



            <div className="card--stats">
                {/* {   JS    } inclusao de javascript */}
                <img src="./images/star.png" className="card--star" alt="" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) .</span>
                <span className="gray">{props.location}</span>

            </div>

            <p className="card--title">{props.title}</p>
            <p><span className="card--price">From ${props.price}</span> / person</p>


        </div>
    )

}
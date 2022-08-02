import React from "react";
// import katiezaferes from "../images/katie-zaferes.png"
import star from "../images/star.png"

// props podem ser passadas como um objeto, nao sendo necessario chamar o "props".Assim: {prop1, prop2, prop3}

// Para tratar properties que eventualmente podem vir vazias, envolver a tag com colchetes e escrever a condiçao. 

// Ex:
// a condiçao pode ser o proprio parametro
//     {condicao && <h1>valor: {props.prop1}</h1>}

// Outra forma ex:

// style={{display: props.prop1 ? "block" : "none"}}

// Para passar outros valores que nao sejam string, usar as chaves.Ex:

// propriedade={true}


export default function Card(props){
    

    return(

        // {props.nome} chamará a propriedade
        <div className="card">

            <img  src={props.img} className="card--image" alt="not-found"/>



            <div className="card--stats">
                {/* {   JS    } inclusao de javascript */}
                <img src={star} className="card--star" alt=""/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) .</span>
                <span className="gray">{props.country}</span>
                
            </div>

            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>


        </div>
    )

}
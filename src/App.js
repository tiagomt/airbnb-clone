import "./style.css";
import NavBar from "./components/Nav";
import Card from "./components/Card";
import Cards from "./data"
import Hero from "./components/Hero"

export default function App() {

  const cardsElements = Cards.map(card => {

    return (<Card

      //definindo campo chave(key). Deve ser unico
      key={card.id}
      // combinando string com componente
      // img={`./images/${card.coverImg}`}
      // title={card.title}
      // price={card.price}
      // rating={card.stats.rating}
      // reviewCount={card.stats.reviewCount}
      // location={card.location}
      // openSpots={card.openSpots}

      // Pegando dados direto do JSON. Desta forma fica mais explicita do que com spread
      // card={card}

      // Jogando os dados do array diretamente como propriedades do componente Card
      {...card}
    />
    )

  })

  return (
    <div>
      <NavBar />
      <Hero />
      {/* Renderzando array de <Card /> criado na variavel cardsElements utilizando map */}
      <section className="cards-list">
        {cardsElements}
        {/* <Card {...Cards[0]} />
        {console.log(Cards[0])} */}
      </section>
    </div>


  );
}

const nums = [1,2,3,4,5]

const square = nums.map((num) => num * num)

console.log(square)

const names = ["alice", "bob", "charlie", "danielle"]

const uppercase = names.map((name) =>{

    return name[0].toUpperCase() + name.slice(1)
})

console.log(uppercase)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const pokemons = pokemon.map((pokemon) => {

    return `<p>${pokemon}</p>`

})

console.log(pokemons)


// Passar um array para o react retornar como JSX
// Dessa forma, todas as tags serão impressas na tela
//Isso possibilita que sejam passados arquivos externos, ao inves de apenas digitar o codigo diretamente. Para isso, criar um arquivo externo e exporta-lo usando o "export default"

/*
    export default function App(){

        const colors = [

            <h3>Red</h3>
            <h3>Orange</h3>
            <h3>Yellow</h3>
            <h3>Green</h3>
            <h3>Blue</h3>
            <h3>Indigo</h3>
            <h3>Violet</h3>

        ]

        return(
            <div>
                {colors}
            </div>
        )

    }





*/
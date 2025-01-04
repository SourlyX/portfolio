import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "./Card"
import Axios from "axios"

const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 40px;
  color: white;
`


const Container = styled.div`
  background-color: #1F1F1F;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: center;
`

function CardContainer({ pokemons }) {
  const [detailedPokemons, setDetailedPokemons] = useState([])
  const [evolutionChain, setChain] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        // Obtenemos detalles de todos los Pokémon
        const detailedDataPromises = pokemons.map(async (pokemon) => {
          const response = await Axios.get(pokemon.url)
          return { ...response.data }
        })

        const detailedData = await Promise.all(detailedDataPromises)

        // Remueve duplicados y ordena por índice del juego
        const uniquePokemons = detailedData.filter((pokemon, index, self) => {
          const gameIndex = pokemon.game_indices[3]?.game_index || 0
          return (
            self.findIndex(p => (p.game_indices[3]?.game_index || 0) === gameIndex) === index
          )
        }).sort((a, b) => {
          const indexA = a.game_indices[3]?.game_index || 0
          const indexB = b.game_indices[3]?.game_index || 0
          return indexA - indexB
        })

        setDetailedPokemons(uniquePokemons)

        // Obtiene las cadenas evolutivas
        const chainPromises = uniquePokemons.map(async (pokemon) => {
          const speciesResponse = await Axios.get(pokemon.species.url)
          const chainsResponse = await Axios.get(speciesResponse.data.evolution_chain.url)
          return chainsResponse.data
        })

        const chains = await Promise.all(chainPromises)

        // Filtra cadenas evolutivas únicas
        const uniqueChains = chains.filter((chain, index, self) => {
          return self.findIndex(c => c.chain.species.name === chain.chain.species.name) === index
        })

        setChain(uniqueChains)

        // Generamos los Cards con las cadenas evolutivas asociadas
        const pokemonWithCards = uniquePokemons.map(pokemon => {
          const chainData = hasChain(pokemon.name, uniqueChains)

          // Filtra Pokémon de la misma cadena
          const relatedPokemons = uniquePokemons.filter(p => {
            return isPartOfChain(p.name, chainData)
          })

          // Genera los Cards renderizados de esta cadena
          const relatedCards = relatedPokemons.map(p => (
            <Card key={p.id} pokemon={p}/>
          ))

          return (
            <Card key={pokemon.id} pokemon={pokemon} evolutionChain={chainData} pokemonEvolutions={relatedCards} />
          )
        })

        setCards(pokemonWithCards)
      } catch (error) {
        console.error("Error fetching Pokémon data:", error)
      }
    }

    fetchPokemonData()
  }, [pokemons])

  const hasChain = (pokemonName, chains) => {
    const traverseChain = (currentChain) => {
      if (!currentChain) return null
  
      if (currentChain.species?.name === pokemonName) return true
  
      // Recorremos todas las evoluciones disponibles
      for (const evolution of currentChain.evolves_to) {
        if (traverseChain(evolution)) return true
      }
  
      return false
    }
  
    for (const chainData of chains) {
      if (traverseChain(chainData.chain)) return chainData
    }
  
    return null
  }
  
  const isPartOfChain = (pokemonName, chainData) => {
    if (!chainData || !chainData.chain) return false

    const traverseChain = (currentChain) => {
      if (!currentChain) return false
      if (currentChain.species?.name === pokemonName) return true

      return currentChain.evolves_to.some(evolution => traverseChain(evolution))
    }

    return traverseChain(chainData.chain)
  }

  return (
    <>
      <Title>Pokedex</Title>
      <Container>
        {cards}
      </Container>
    </>
  )
}

export default CardContainer
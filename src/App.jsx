import { Route, Routes } from 'react-router-dom'
import './App.css'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails'
import Pokedex from '../components/Pokedex/Pokedex'

function App() {
  

  return (
  
    <>
     <Routes>
      <Route path="/" element={<Pokedex/>} ></Route>
      <Route path="/pokemon/:id" element={<PokemonDetails/>} ></Route>
      <Route path="*" element={<h1>Not Found</h1>}></Route>
   
    </Routes>
    </>
   
  )
}

export default App

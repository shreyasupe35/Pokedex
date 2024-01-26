import Pokemonlist from '../Pokemonlist/Pokemonlist'
import Search from '../Search/Search'
import './Pokedex.css'
function Pokedex(){
return (
    <div className='pokedex-wrapper'>
        <h1>Pokedex</h1>
        <Search/>
        <Pokemonlist />
    
    </div>
)
}
export default Pokedex;
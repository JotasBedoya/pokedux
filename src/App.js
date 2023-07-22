import { useEffect } from 'react';
import { Col } from 'antd'
import Searcher from './components/Searcher';
import { getPokemon, getPokemonDetails } from './api';
import { setPokemons } from './actions';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg' 
import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        );   
      dispatch(setPokemons(pokemonDetailed));
    };


    fetchPokemons();
  }, []);

 

  return (
    <div className="App"> 
    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <img id='logopoke' src={logo} alt='Logo'/>
    </Col>
    
    <Col span={8} offset={8}>
      <Searcher />
    </Col>
    <PokemonList pokemons={pokemons}/>
    </div>
  );
}


export default App;

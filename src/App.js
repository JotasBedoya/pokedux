import { useEffect } from 'react';
import { Col, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import logo from './statics/logo.svg' 
import './App.css';
import { fetchPokemonsWithDetails } from './slices/dataSlice';


function App() {

  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  
  const loading = useSelector((state) => state.ui.loading);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, []);


  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 150,
        color: 'red',
        fontWeight: 900,
        
      }}
      spin
    />
  );
 

  return (
    <div className="App"> 
    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <img id='logopoke' src={logo} alt='Logo'/>
    </Col>
    
    <Col span={8} offset={8}>
      <Searcher />
    </Col>
    {loading ?  <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Spin indicator={antIcon} />
    </Col> : <PokemonList pokemons={pokemons}/> }
    
    </div>
  );
}


export default App;

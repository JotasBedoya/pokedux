import {Card} from 'antd'
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import LoveButton from './LoveButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

const PokemonCard = ({name, image, types, id}) =>{
    const dispatch = useDispatch();
    const typeString = types.map(elem => elem.type.name).join(', ')

    const handleOnLike = () => {
        dispatch(setFavorite({pokemonId: id}));
    }


    return (
    <Card
    title= <h3>{name}</h3>
    className="custom-card"
    
    cover={<
        
        
        img 
        src={image} 
        alt={name}
        className= "PokemonCard-image"
        />}
    
    extra={<LoveButton isFavorite onClick={handleOnLike} style={{ fontSize: '18px', color: 'white', background: '#8EA7A41C'}} />}
        >
        
        <Meta description= {typeString} />
        
    </Card>
    );
};

export default PokemonCard;
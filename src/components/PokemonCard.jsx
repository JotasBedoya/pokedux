import {Card} from 'antd'
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = ({name, image }) =>{
    return (
    <Card
    className="custom-card"
    cover={<
        img 
        src={image} 
        alt={name}
        className= "PokemonCard-image"
        />}
    extra={<StarOutlined/>}
        >
        <h3>{name}</h3>
        <Meta description= '' />
        
    </Card>
    );
};

export default PokemonCard;
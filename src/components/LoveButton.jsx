import { Button } from 'antd';
import { HeartOutlined, HeartFilled  } from '@ant-design/icons';

const LoveButton = ({isFavorite, onClick}) => {
    const Icon = isFavorite ? HeartFilled : HeartOutlined;
    return <Button icon={<Icon />} onClick={onClick}/>
};

export default LoveButton;
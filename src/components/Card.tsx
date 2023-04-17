import React from "react";
import { useDispatch} from "react-redux";
import {addItem} from '../redax/slices/cartSlice'


type CardProps = {
    id: string;
    imageUrl: string;
    title: string;
    price: number;
   
}

const Card: React.FC<CardProps> = ({imageUrl, title, price, id}) => {
    const [isAdded, setIsAdded] = React.useState(true)
    const dispatch = useDispatch()
    
    
    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            imageUrl,
        };
        setIsAdded(!isAdded);
        dispatch(addItem(item))
    }

    return(
        <div className="card">
            <div className="card__icons" >
                <div className="card__icons_plus" onClick={onClickAdd}>
                    <img width={30} height={28} src={isAdded ? "./img/plus.svg" : "./img/plus__ok.svg"} alt="plus" />
                </div>
            </div>
            <div className="card__image">
                <img width={251} height={182}  src={imageUrl} /> 
            </div>
            <div className="card__pricetag">
                <div className="card__title">{title}</div>
                <div className="card__price">{price}$</div>
            </div>
        </div> 
    )
};

export default Card;


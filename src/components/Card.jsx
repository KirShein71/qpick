import React from "react";

function Card({imageUrl, title, price, id, onClickFavorite, onFavorite, favorited, onClickPlus, onPlus }) {
    const [isFavorite, setIsFavorite] = React.useState(favorited)
    const [isAdded, setIsAdded] = React.useState(true)


    onClickFavorite = () => {
        onFavorite({title, imageUrl, price, id})
        setIsFavorite(!isFavorite)
    }

    onClickPlus = () => {
        onPlus({title, imageUrl, price, id})
        setIsAdded(!isAdded)
    }
       

    return(
        <div className="card">
            <div className="card__icons" >
                <div className="card__icons_favorite" onClick={onClickFavorite}>
                    <img width={20} height={18} src={isFavorite ? "./img/favorite__liked.svg" : "./img/favorite_card.svg"} alt="heart"/>
                </div>
                <div className="card__icons_plus" onClick={onClickPlus}>
                    <img width={30} height={28} src={isAdded ? "./img/plus.svg" : "./img/plus__ok.svg"} alt="plus" />
                </div>
            </div>
            <div className="card__image">
                <img width={251} height={182} src={imageUrl} /> 
            </div>
            <div className="card__pricetag">
                <div className="card__title">{title}</div>
                <div className="card__price">{price}$</div>
            </div>
        </div> 
    )
};

export default Card;
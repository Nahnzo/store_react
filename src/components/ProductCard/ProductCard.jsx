import React from 'react';
import cl from './productsCard.module.css'

const ProductCard = ({products, addToCard}) => {

    return (
        <div className={cl.container}>
            {products.length !== 0 ? products.map(item =>
                    <div className={cl.card} style={{backgroundImage: `url(${item.image})`}} key={item.id}>
                        <h5>{item.title}</h5>
                        <p>Rating:<strong>{item.rating.rate}</strong></p>
                        <button className={cl.myBtn} onClick={() => addToCard(item)}>Add to cart <br/>${item.price}
                        </button>
                        <h6 className={cl.desc}>{item.description}</h6>
                    </div>)
                : <h1>Loading items</h1>}
        </div>
    );
};

export default ProductCard;
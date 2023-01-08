import React from 'react';
import cl from "./cart.module.css"

const Cart = ({totalPrice, modal, setModal, cartItem, deleteItem}) => {

    return (
        <div className={cl.cart} onClick={() => setModal(prev => !prev)}>
            <strong>$ {totalPrice} </strong>
            <div className={cl.totalItems}>{cartItem.length}</div>
            <div className={modal ? cl.active : cl.disabled}>
                <div className={cl.content} onClick={(e) => e.stopPropagation()}>
                    {cartItem.length === 0 ? <h1>No items here</h1> : cartItem.map(item =>
                        <div className={cl.Product} key={item.id} style={{backgroundImage: `url(${item.image})`}}>
                            {item.title}
                            <strong className={cl.price}>${item.price}</strong>
                            <button onClick={() => deleteItem(item.id, item.price)} className={cl.btnDel}>X</button>
                        </div>)}
                    <div className={cl.info}> {totalPrice === 0 ? '' : <strong>${totalPrice}</strong>}</div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

//
import React from 'react';

export const CardItems = ({ id, name, price, qty, updateQty }) => {

    const addOne = () => {
        updateQty(id, qty + 1)
    }

    const minusOne = () => {
        updateQty(id, qty - 1)
    }

    return (
        <div className="Card-items">
            <div>{name}</div>
            <div>${price}</div>
            <div>
                <button onClick={minusOne} disabled={qty <= 1}>-</button>
                {qty}
                <button onClick={addOne}>+</button>
            </div>
            <div>Total ${qty * price}</div>
        </div>
    )
}


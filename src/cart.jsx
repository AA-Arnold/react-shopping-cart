import React from 'react';
import { CardItems } from './cart-items'
import './cart.css'

export const Cart = ({ initialItems }) => {

    const storageItems = JSON.parse(window.localStorage.getItem('items'))
    const [items, setItems] = React.useState(storageItems || initialItems)
    React.useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
            return item.id === id ? { ...item, qty: newQty } : item
        })

        setItems(newItems)
    }

    const grandTotal = items.reduce((total, item) => (
        total + item.qty * item.price
    ), 0).toFixed(3)
    return (
        <div className='cart'>
            <h1 className='cart-title'>Shopping Chart</h1>
            <div className="cart-items">
                {
                    items.map(item => <CardItems key={item.id} updateQty={updateQty} {...item} />)
                }
            </div>
            <h3 className="cart-total">Grand Total : ${grandTotal}</h3>
        </div>
    )
}


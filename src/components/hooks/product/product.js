import React, {useState} from 'react'

const Product = () => {
    const [cart, setCart] = useState([]);

    return(
        <div className="wrapper">
        <div>
        Shopping Cart: {cart.length} total items.
        </div>
        <div>Total: 0</div>
        <div className="product"><span role="img" aria-label="ice"></span>
        <button>Add</button> <button>Remove</button>
        </div>
        </div>
        )
}

export default Product
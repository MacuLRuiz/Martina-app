import React from 'react';
import Item from './Item';
// import Loader from "../Loader/Loader";


const ItemList = ({product}) => {



return (
    product.map(prod=> <Item  key={prod.id} prod={prod}/>
                
                )
    )
}

export default ItemList
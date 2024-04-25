import React from 'react'
const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{ border: '1px solid #198', padding: '10px', margin: '10px', }}>
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer;
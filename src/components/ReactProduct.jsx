import React from 'react';

export default function ReactProduct({product}) {
    return (
        <section key={product._id} style={{
            width:"50%",
            display:"flex",
            flexDirection:"column",
            margin:"2rem",
            rowGap:"1rem"
        }}>            
            <img src={product.image.sourceUrl}/>
            <span>
                <b>{product.name}</b>:
                ${product.price}                
            </span>            
            <h3>{product.description}</h3>
        </section>
    )
}

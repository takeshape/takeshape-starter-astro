export default function ReactProduct({product}) {
    return (
        <section style={{
            display:'flex',
            flexDirection:'column',
            borderBottom:'1px solid black',        
        }}>            
            <img style={{width:"100%"}} src={product.image.sourceUrl}/>
            <span style={{marginTop:'1rem'}}>
                <b>{product.name}</b>:
                ${product.price}                
            </span>            
            <h3>{product.description}</h3>
        </section>
    )
}

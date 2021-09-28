import {Link} from "react-router-dom";
import './index.css'
const BlogList =({ products, title1} )=> {
    const handleClick = () => {
        fetch('http://localhost:8000/products/'+ products.id, {
            method: 'DELETE'
        }).then(() =>{
            window.location.href="/";
        })
    }
    return (
       <div className='blog-list'>
         <h2>{title1}</h2>
        {products.map((products) => (
                <div className = 'blog-preview' key={products.id}>
                    <Link to={`/products/${products.id}`}>
                        <h2>{products.name}</h2>
                        <p><img src={products.imageUrl} style={{width:200, height:200, float: "left" }} alt={"logo"}/>
                            {products.description}</p>
                        <br></br>
                        <p>Quantity available {products.count}</p>

                    </Link>
                    <button onClick={handleClick}>Delete product</button>


                </div>
            ))}
       </div>
    )
}

export default BlogList
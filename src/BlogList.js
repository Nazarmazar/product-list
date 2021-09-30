import {Link} from "react-router-dom";
import './index.css'
const BlogList =({ products, title1} )=> {
    
    return (
       <div className='blog-list'>
         <h2>{title1}</h2>
         <select>
            <option value="">--Please choose an option--</option>
            <option value="name">Name</option>
            <option value="quantity">Quantity</option>
        </select>
        {products.map((products) => (
                <div className = 'blog-preview' key={products.id}>
                    <Link to={`/products/${products.id}`}>
                        <h2>{products.name}</h2>
                        <p><img src={products.imageUrl} style={{width:200, height:200, float: "left" }} alt={"logo"}/>
                            {products.description}</p>
                        <br></br>
                        <p>Quantity available {products.count}</p>

                    </Link>
                    


                </div>
            ))}
       </div>
    )
}

export default BlogList

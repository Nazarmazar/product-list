import {Link, useHistory, useParams} from "react-router-dom"
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id} = useParams()
    const {data: products,error, isPending} = useFetch( 'http://localhost:8000/products/'+id)
    const history = useHistory()
    const handleClick = () => {
        fetch('http://localhost:8000/products/'+ products.id, {
            method: 'DELETE'
        }).then(() =>{
            window.location.href="/";
        })
    }
    return (

        <div className='blog-details'>
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {products&& (
                <article>

                    <h2>{products.name}</h2>
                    <p><img src={products.imageUrl} style={{width:200, height:200, float: "left" }} alt={"logo"}/>
                        {products.description}</p>
                    <br></br>
                    <p>Quantity available {products.count}</p>
                    <br></br>
                    <p>Colour of product: {products.colour}</p>
                    <br></br>
                    <p>Weight of product: {products.weight}</p>

                    <button onClick={handleClick}>Delete product</button>
                </article>
            )}
        </div>
    )
}
export default BlogDetails
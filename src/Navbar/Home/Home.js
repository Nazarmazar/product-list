import BlogList from "../../BlogList";
import useFetch from "../../useFetch";

const Home = () => {
    const {data: products, isPending, error} = useFetch('http://localhost:8000/products')

    const handleDelete = (id) => {
        const newProducts = products.filter(products => products.id);
        products(newProducts)
    }

    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {products && <BlogList products={products} handleDelete={handleDelete} title1 = 'All products' />}

        </div>
    )
}
export default Home
import ProductCard from "@/Components/ProductCard/ProductCard";
import { getAllProducts } from "@/Utils/productsApi";

const ProductsPage = async () => {
    const allProducts = await getAllProducts();
    return (
        <div className="my-5">
            <h1 className="text-3xl sm:text-5xl text-center font-bold text-cyan-700/70 my-2">All Products</h1>

            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
                {
                    allProducts.map((product, ind) =>
                        <ProductCard product={product} key={ind} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;
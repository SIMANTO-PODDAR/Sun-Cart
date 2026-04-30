import ProductCard from "@/Components/ProductCard/ProductCard";
import { getAllProducts } from "@/Utils/productsApi";

const PopularProducts = async () => {
    const allProducts = await getAllProducts();
    const popularProducts = allProducts.slice(0, 3);

    return (
        <div className="my-5">
            <h1 className="text-3xl sm:text-5xl text-center font-bold text-cyan-700/70 my-2">Popular Products</h1>

            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
                {
                    popularProducts.map((product, ind) =>
                        <ProductCard product={product} key={ind} />)
                }
            </div>
        </div>
    );
};

export default PopularProducts;
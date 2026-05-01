import { getAllProducts } from "@/Utils/productsApi";
import { FaStar } from "react-icons/fa6";


const ProductDetailsPage = async ({ params }) => {
    const { id } = await params

    const allProducts = await getAllProducts();

    const expectedProduct = allProducts.filter(p => p.id == id);

    if (expectedProduct.length == 0) {
        return <h1 className="text-3xl sm:text-5xl text-center font-bold text-cyan-700/70 my-2 mt-5">No products found!</h1>
    }

    const product = expectedProduct[0]

    return (
        <div className="mb-5">
            <h1 className="text-xl sm:text-3xl text-center font-bold text-cyan-700/70 my-2">Details</h1>
            <div className="flex justify-center">
                <div className="card bg-base-100 w-60 sm:w-90 shadow-sm">
                    <figure>
                        <img className='overflow-hidden max-h-82' src={product.image} alt={product.name} />
                    </figure>

                    <div className="card-body">
                        <div className="text-center">
                            <h2 className="text-[13px] sm:text-xl font-bold ">
                                {product.name}
                            </h2>
                        </div>

                        <div className="flex justify-between">
                            <h3 className="font-semibold">Brand: {product.brand}</h3>
                            <h2 className="badge bg-amber-200 text-cyan-700"><FaStar /> {product.rating}</h2>
                        </div>

                        <p>{product.description}</p>
                        <p className='font-semibold'> Category: {product.category}
                        </p>


                        <div className="card-actions justify-between">
                            <div className="hover:text-cyan-700 font-bold text-[12px] sm:text-xl">Price: {product.price}$</div>
                            <div className="hover:text-cyan-700 font-semibold text-[12px] sm:text-xl">Stock: {product.stock}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
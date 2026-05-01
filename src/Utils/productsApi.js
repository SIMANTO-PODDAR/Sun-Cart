export const getAllProducts = async () => {
    const res = await fetch("https://sun-cart.vercel.app/allproducts.json");
    return await res.json();
};
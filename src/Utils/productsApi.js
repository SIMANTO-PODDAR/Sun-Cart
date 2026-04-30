export const getAllProducts = async () => {
    const res = await fetch("https://sun-cart.vercel.app/allproducts.json", { cache: 'no-cache' });
    return await res.json();
};
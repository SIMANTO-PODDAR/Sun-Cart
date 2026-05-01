import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

const ProductCard = ({ product }) => {

    const { image, name, rating, price, description, id } = product;

    return (
        <div>
            <div className="card bg-base-100 w-60 sm:w-90 shadow-sm">
                <figure>
                    <img className='overflow-hidden max-h-82' src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[15px] justify-between">
                        {name}
                        <div className="badge bg-amber-200 text-cyan-700"><FaStar /> {rating}</div>
                    </h2>
                    <p className='line-clamp-1 opacity-80'>{description}</p>
                    <div className="card-actions justify-between">
                        <div className="btn hover:text-cyan-700 font-bold text-xl scale-80 sm:scale-100">$ {price}</div>
                        <Link href={`/products/${id}`} className="btn bg-blue-300 scale-80 sm:scale-100">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
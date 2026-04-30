import Image from "next/image";
import GucciImg from "../../../public/gucci.png";
import LouisVuittonImg from "../../../public/louisvuitton.png";
import AdidasImg from "../../../public/adidas.png";

const TopBrands = () => {
    return (
        <div>
            <h1 className="text-3xl sm:text-5xl text-center font-bold text-cyan-700/70 my-2">Top Brands</h1>
            <div className="
                    grid grid-cols-1 text-center gap-3 sm:gap-5 mt-5 text-black/50 justify-between py-5
                    sm:grid-cols-2 sm:py-20 sm:mt-10
                    lg:grid-cols-3 lg:py-0"
            >

                <div className="card bg-base-100 card-md shadow-sm">
                    <div className="card-body flex flex-col items-center">
                        <Image src={GucciImg} alt="Gucci" 
                        height={70} />
                        <p className="text-[18px]">Gucci</p>
                    </div>
                </div>

                <div className="card bg-base-100 card-md shadow-sm">
                    <div className="card-body flex flex-col items-center">
                        <Image src={LouisVuittonImg} alt="Louis Vuitton"
                        height={70} />
                        <p className="text-[18px]">Louis Vuitton</p>
                    </div>
                </div>

                <div className="card bg-base-100 card-md shadow-sm">
                    <div className="card-body flex flex-col items-center">
                        <Image src={AdidasImg} alt="Adidas"
                        height={70} />
                        <p className="text-[18px]">Adidas</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopBrands;
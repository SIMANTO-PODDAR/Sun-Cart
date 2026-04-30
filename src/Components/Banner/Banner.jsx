import Image from "next/image";
import BannerImg from "../../../public/summer-sale.png"
import { FaFire } from "react-icons/fa6";
import 'animate.css';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-cyan-200/40 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <Image className="opacity-85" height={500} src={BannerImg} alt="Banner Img" loading="eager" />
                    <div>
                        <h1 className="text-3xl sm:text-5xl font-bold text-cyan-700/70 animate__animated animate__fadeInDown">Summer Sale 70% OFF </h1>
                        <p className="py-6 opacity-80">
                            Enjoy up to 70% OFF on everything you need for the ultimate summer glow-up
                            From fits to accessories, it’s all here and it’s all on sale.
                        </p>
                        <button className="btn bg-cyan-700/70 text-yellow-400">Hot Deals <FaFire /></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
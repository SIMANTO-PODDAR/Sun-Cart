import Link from "next/link";
import Logo from "../../../public/suncartlogo.png"
import Image from "next/image";


const Navbar = () => {
    const LoggedIn = true//false ;

    return (
        <div className="bg-blue-300/70">
            <div className="navbar bg-blue-300/60 shadow-sm flex-wrap sm:flex-nowrap  container mx-auto">
                <div className="navbar-start">
                    <Image height={50} src={Logo} alt="Sun Cart Logo"
                        title="Sun Cart" />
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1 gap-3">

                        <Link className=" font-bold hover:text-cyan-700 hover:underline" href='/' ><li> Home </li></Link>
                        <Link className=" font-bold hover:text-cyan-700 hover:underline" href='/products' ><li> Products </li></Link>
                        <Link className=" font-bold hover:text-cyan-700 hover:underline" href='/profile' ><li> My Profile </li></Link>

                    </ul>
                </div>
                <div className="navbar-end justify-start scale-80 sm:scale-100 sm:justify-end">

                    <div className={`gap-2 items-center 
                        ${LoggedIn ? 'flex' : 'hidden '}`}>

                        <div>👤</div>
                        <button className="btn font-bold bg-red-200  hover:text-red-600 border-red-300" > Logout </button>

                    </div>

                    <div className={`gap-2  ${LoggedIn ? 'hidden' : 'flex'}`}>
                        <Link className="btn font-bold bg-amber-200 hover:bg-cyan-300 " href='/login' > Login </Link>
                        <Link className="btn font-bold bg-amber-200 hover:bg-cyan-300 " href='/register' > Register </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
"use client"
import Link from "next/link";
import Logo from "../../../public/suncartlogo.png"
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Avatar } from "@heroui/react";


const Navbar = () => {
    const { data: session } = authClient.useSession();

    const user = session?.user;

    const router = useRouter();

    const LogOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success('Log out successfully!')
                    router.push("/");
                },
            },
        });
    }

    return (
        <div className="bg-blue-300/80 sm:sticky top-0 z-50">
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
                        ${session ? 'flex' : 'hidden '}`}>

                        <Avatar>
                            <Avatar.Image alt={user?.name} src={user?.image} 
                            referrerPolicy="no-referrer"/>
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <button onClick={LogOut} className="btn font-bold bg-red-200  hover:text-red-600 border-red-300" > Logout </button>

                    </div>

                    <div className={`gap-2  ${session ? 'hidden' : 'flex'}`}>
                        <Link className="btn font-bold bg-amber-200 hover:bg-cyan-300 " href='/login' > Login </Link>
                        <Link className="btn font-bold bg-amber-200 hover:bg-cyan-300 " href='/register' > Register </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
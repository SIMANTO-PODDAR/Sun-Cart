"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { MdVerified } from "react-icons/md";

const ProfilePage = () => {
    const { data: session } = authClient.useSession();

    const user = session?.user;
    return (
        <div>
            <div className="card bg-base-100 max-w-96 shadow-sm mx-auto mt-5">
                <figure>
                    <Avatar className="h-25 w-25">
                        <Avatar.Image alt={user?.name} src={user?.image}
                            referrerPolicy="no-referrer" />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold flex items-center gap-1">Name: {user?.name}
                        <span title="Email verification badge" className={`text-[15px] text-cyan-700 outline p-0.5 rounded-full
                            ${user?.emailVerified ? "grid" : "hidden"} `}><MdVerified /></span></h2>

                    <p className="text-[16px] font-bold opacity-80">Email: {user?.email}</p>
                    <div className="card-actions justify-end">
                        <Link href='/profile/update' className="btn text-white bg-cyan-700/70 mt-5">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
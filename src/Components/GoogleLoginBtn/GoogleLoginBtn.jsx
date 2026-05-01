import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleLoginBtn = () => {

    const GoogleLogin = async () => {

        const data = await authClient.signIn.social({
            provider: "google",
        });

    }

    return (
        <div className='flex justify-center'>
            <Button onClick={GoogleLogin} className="bg-blue-300/80">
                <FcGoogle className='bg-white m-1 scale-150 rounded-full' />
                <span className=' font-bold text-cyan-700'>Continue with Google</span></Button>
        </div>
    );
};

export default GoogleLoginBtn;
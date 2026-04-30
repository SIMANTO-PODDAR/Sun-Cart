"use client";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const [loader, setLoader] = useState(false);
    const router = useRouter();

    const onSubmit = async (e) => {
        setLoader(true);
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;

        await authClient.updateUser({
            image: photo,
            name: name,
        })

        toast.success('Information updated successfully.')
        setLoader(false);
        router.push('/profile');
    };


    return (
        <div>
            <div className="mt-2 sm:mt-10 mb-10 sm:mb-0 p-5 sm:p-0">
                <h1 className="text-xl sm:text-3xl text-center font-bold text-cyan-700/70 my-2">Update Information</h1>

                <div className={` justify-center mt-5 ${loader ? 'hidden' : 'flex'}`}>

                    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

                        {/* Name */}
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                        >
                            <Label>Name</Label>
                            <Input placeholder="Enter your Name" />
                            <FieldError />
                        </TextField>

                        {/* Photo-url */}
                        <TextField
                            isRequired
                            name="photo"
                            type="url"
                        >
                            <Label>Photo URL</Label>
                            <Input placeholder="Enter your Photo URL" />
                            <FieldError />
                        </TextField>

                        <div className="flex gap-2">
                            <Button type="submit">
                                <GrDocumentUpdate />
                                Update Info
                            </Button>
                        </div>

                    </Form>
                </div>

                <div className={` justify-center mt-5 ${loader ? 'grid' : 'hidden'}`}>
                    <div className="flex justify-center">
                        <ProgressBar
                            className="flex justify-center mx-auto"
                            visible={true}
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>

                    <h1 className="text-center font-bold text-xl opacity-70">Processing your request.</h1>
                </div>

            </div>
        </div>
    );
};
export default UpdateProfile;
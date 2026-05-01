"use client";
import GoogleLoginBtn from "@/Components/GoogleLoginBtn/GoogleLoginBtn";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";

const RegisterPage = () => {

    const [loader, setLoader] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const router = useRouter();

    const onSubmit = async (event) => {
        setLoader(true);
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;


        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
        },
            {
                onSuccess: async () => {
                    toast.success("Registration completed successfully.");
                    await authClient.signOut();
                    setLoader(false);
                    router.push('/login');
                }
            }
        );

        if (error) {
            toast.error(error.message)
        };

        setLoader(false);
    }

    return (
        <div className="mt-2 sm:mt-10 mb-10 sm:mb-0 p-5 sm:p-0">
            <h1 className="text-xl sm:text-3xl text-center font-bold text-cyan-700/70 my-2">Create Your SunCart Account</h1>

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


                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your Email" autoComplete="username" />
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

                    {/* Password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}>
                        <Label>Password</Label>

                        <InputGroup>
                            <InputGroup.Input
                                className="w-full"
                                placeholder="Enter your Password"
                                type={isVisible ? "text" : "password"}
                                autoComplete="current-password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>

                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />

                    </TextField>

                    <div className="flex gap-2 justify-end">
                        <Button type="submit">
                            <Check />
                            Register
                        </Button>
                    </div>
                    <h1 className="font-bold text-center opacity-80">Already have an account? <Link href='/login' className="underline italic text-cyan-700 opacity-100">Log in</Link></h1>
                    <GoogleLoginBtn />
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
    );
};

export default RegisterPage;
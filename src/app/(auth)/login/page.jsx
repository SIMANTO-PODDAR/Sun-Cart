"use client";
import GoogleLoginBtn from "@/Components/GoogleLoginBtn/GoogleLoginBtn";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";

const LogInPage = () => {

    const [loader, setLoader] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (event) => {
        setLoader(true);
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Login successfully.")
        }

        if (error) {
            toast.error(error.message)
        };

        setLoader(false);
    }

    return (
        <div className="mt-2 sm:mt-10 mb-10 sm:mb-0 p-5 sm:p-0">
            <h1 className="text-xl sm:text-3xl text-center font-bold text-cyan-700/70 my-2">Login  Your SunCart Account</h1>

            <div className={` justify-center mt-5 ${loader ? 'hidden' : 'flex'}`}>

                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>


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

                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Login
                        </Button>
                    </div>
                    <h1 className="font-bold text-center opacity-80">Don’t have an account? <Link href='/register' className="underline italic text-cyan-700 opacity-100">Register</Link></h1>
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

export default LogInPage;
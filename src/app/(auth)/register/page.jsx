"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const RegisterPage = () => {

    const onSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;


        console.log(name, email, photo, password)
    }

    return (
        <div className="mt-2 sm:mt-10 mb-10 sm:mb-0 p-5 sm:p-0">
            <h1 className="text-xl sm:text-3xl text-center font-bold text-cyan-700/70 my-2">Create Your SunCart Account</h1>

            <div className="flex justify-center mt-5">

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
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your Password" autoComplete="current-password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Register
                        </Button>
                    </div>
                </Form>
            </div>

        </div>
    );
};

export default RegisterPage;
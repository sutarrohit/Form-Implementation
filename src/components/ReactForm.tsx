/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"; // Enables React's Client Components in Next.js

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

// Define the structure of the form inputs using TypeScript interface
interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const ReactForm = () => {
  // Initialize the form methods from react-hook-form, specifying the form input type
  const {
    register, // Registers input fields and validation
    handleSubmit, // Function to handle form submission
    reset, // Resets form fields after submission
    formState: { errors }, // Captures form validation errors
  } = useForm<IFormInput>();

  const { toast } = useToast();
  const router = useRouter();

  // Function to handle form submission; typed as SubmitHandler with IFormInput
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.table(data); // Log the form data in a table format for debugging

    // Display a success toast notification with the form data
    toast({
      variant: "success",
      // @ts-ignore
      title: (
        <div className="text-[16px] font-bold">
          Your form has been submitted!
        </div>
      ),
      className: "bg-green-500 text-white",
      description: (
        <div className="flex flex-col gap-1 text-[14px] font-bold mt-2">
          <p>First Name: {data.firstName}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
        </div>
      ),
    });

    reset(); // Reset the form after submission
  };

  return (
    <>
      {/* Navigation button to go back to home */}
      <div className="px-4 h-[70px] w-full flex items-center">
        <Button
          onClick={() => router.push("/")} // Navigate back to home
          className="bg-green-500 font-bold"
        >
          Back To Home
        </Button>
      </div>

      {/* Form container */}
      <div className="min-h-[calc(100vh-70px)] w-full flex justify-center items-center">
        {/* Form with submit handler */}
        <form
          onSubmit={handleSubmit(onSubmit)} // Attach submit handler to the form
          className="flex flex-col gap-4 w-full items-center justify-center"
        >
          {/* Form title */}
          <h1 className="text-3xl font-bold text-green-500 w-full text-center">
            Form using react-hook-form
          </h1>

          {/* Form fields and error handling */}
          <div className="border flex flex-col gap-2 w-[95%] sm:w-[400px] border-green-500 px-5 py-6 rounded-xl">
            {/* First Name input */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="firstName" className="text-md font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                className="border rounded-md p-3 w-full text-base"
                {...register("firstName", {
                  required: "First Name is required", // Validation rule
                })}
              />
              {/* Display error if validation fails */}
              {errors.firstName && (
                <p className="text-[14px] text-red-500 font-medium">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name input */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="lastName" className="text-md font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last name"
                className="border rounded-md p-3 w-full text-base"
                {...register("lastName", { required: "Last Name is required" })}
              />
              {/* Display error if validation fails */}
              {errors.lastName && (
                <p className="text-[14px] text-red-500 font-medium">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Email input */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-md font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email"
                className="border rounded-md p-3 w-full text-base"
                {...register("email", {
                  required: "Email is required", // Validation rule
                  pattern: {
                    value: /^\S+@\S+$/i, // Regex pattern for valid email
                    message: "Email must be valid", // Error message for invalid email
                  },
                })}
              />
              {/* Display error if validation fails */}
              {errors.email && (
                <p className="text-[14px] text-red-500 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password input */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="password" className="text-md font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your password"
                className="border rounded-md p-3 w-full text-base"
                {...register("password", { required: "Password is required" })}
              />
              {/* Display error if validation fails */}
              {errors.password && (
                <p className="text-[14px] text-red-500 font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="border rounded-xl p-3 w-full text-lg font-semibold bg-green-500 text-white hover:bg-green-600 mt-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReactForm;

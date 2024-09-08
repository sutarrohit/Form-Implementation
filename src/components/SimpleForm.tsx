/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
/**
 * SimpleForm Component
 * This component renders a simple HTML form and handles form submission using React state management.
 * It uses the `useToast` hook to show toast notifications for form validation and submission.
 */
const SimpleForm = () => {
  // Initialize toast from useToast hook
  const { toast } = useToast();
  const router = useRouter();

  // State to store form data: firstName, lastName, email, and password
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  /**
   * handleSubmit
   * This function handles the form submission.
   * It prevents the default form submission behavior, checks for empty fields,
   * and shows a toast notification with the form data if the form is valid.
   * @param e - The form event object
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if any of the form fields are empty
    const findNull = Object.values(formData).some((item) => item === "");
    if (findNull) {
      // Display an error toast if any field is empty
      toast({
        variant: "destructive",
        title: "Please fill all the fields.",
      });
      return;
    }

    // Display a success toast with the form data
    toast({
      variant: "success",
      // @ts-ignore
      title: (
        <div className="text-[16px] font-bold">
          Your form has been submitted!
        </div>
      ),
      className: "bg-pink-500 text-white",
      description: (
        <div className="flex flex-col gap-1 text-[14px] font-bold mt-2">
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
        </div>
      ),
    });

    // Reset the form fields after submission
    setformData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  /**
   * handleInputChange
   * This function handles input changes and updates the form state.
   * It updates the corresponding form field value in the state.
   * @param e - The input change event object
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update the corresponding field in formData state
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="px-4 h-[70px] w-full flex items-center">
        <Button
          onClick={() => router.push("/")}
          className="bg-pink-500 font-bold"
        >
          Back To Home
        </Button>
      </div>
      <div className="min-h-[calc(100vh-70px)] w-full flex justify-center items-center">
        <form
          className="flex flex-col gap-4 w-full items-center justify-center"
          onSubmit={handleSubmit} // Form submission handler
        >
          <h1 className="text-3xl font-bold text-pink-500 w-full text-center">
            Simple HTML Form
          </h1>

          {/* Form fields container */}
          <div className="border flex flex-col gap-2 w-[95%] sm:w-[400px] border-pink-400 px-5 py-6 rounded-xl ">
            {/* First Name input */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="firstName" className="text-md font-medium">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                className="border rounded-md p-3 w-full text-base"
                onChange={handleInputChange} // Input change handler
              />
            </div>

            {/* Last Name input */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="lastName" className="text-md font-medium">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                id="lastName"
                name="lastName"
                placeholder="Enter Last name"
                className="border rounded-md p-3 w-full text-base"
                onChange={handleInputChange}
              />
            </div>

            {/* Email input */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-md font-medium">
                Email
              </label>
              <input
                type="text"
                value={formData.email}
                id="email"
                name="email"
                placeholder="Enter Email"
                className="border rounded-md p-3 w-full text-base"
                onChange={handleInputChange}
              />
            </div>

            {/* Password input */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="password" className="text-md font-medium">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                id="password"
                name="password"
                placeholder="Enter Your password"
                className="border rounded-md p-3 w-full text-base"
                onChange={handleInputChange}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="border rounded-xl p-3 w-full text-lg font-semibold bg-pink-500 text-white hover:bg-pink-600 mt-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SimpleForm;

/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const fromSchema = z.object({
  firstName: z.string().min(1, { message: "Please enter your first name" }),
  lastName: z.string().min(1, { message: "Please enter your last name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// Set default values for the form
const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const ShadcnForm = () => {
  const { toast } = useToast(); // Hook for displaying toast notifications
  const router = useRouter(); // Hook for navigation

  // Initialize react-hook-form with Zod schema validation and default values
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema), // Use Zod schema for form validation
    defaultValues, // Default values for form fields
  });

  // Handle form submission
  const handleSubmit = (data: z.infer<typeof fromSchema>) => {
    console.table(data); // Log form data in a table format for debugging

    // Show success toast with form data
    toast({
      variant: "success",
      // @ts-ignore
      title: (
        <div className="text-[16px] font-bold">
          Your form has been submitted!
        </div>
      ),
      className: "bg-orange-500 text-white",
      description: (
        <div className="flex flex-col gap-1 text-[14px] font-bold mt-2">
          <p>First Name: {data.firstName}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
        </div>
      ),
    });

    form.reset(); // Reset the form after successful submission
  };
  return (
    <>
      {/* Back button to return to the home page */}
      <div className="px-4 h-[70px] w-full flex items-center">
        <Button
          onClick={() => router.push("/")} // Navigate back to home page
          className="bg-orange-500 font-bold"
        >
          Back To Home
        </Button>
      </div>

      {/* Form container */}
      <div className="min-h-[calc(100vh-70px)] w-full flex justify-center items-center">
        {/* Shadcn form component using react-hook-form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)} // Attach submit handler
            className="flex flex-col gap-4 w-full items-center justify-center"
          >
            {/* Form title */}
            <h1 className="text-3xl font-bold text-orange-500 w-full text-center">
              Form using Shadcn
            </h1>

            {/* Form fields with validation and error messaging */}
            <div className="border flex flex-col gap-2 w-[95%] sm:w-[400px] border-orange-500 px-5 py-6 rounded-xl">
              {/* First Name field */}
              <FormField
                control={form.control} // react-hook-form control
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md font-medium">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter first name"
                        {...field} // Attach react-hook-form field logic
                        className="border rounded-md p-6 w-full text-base"
                      />
                    </FormControl>
                    <FormMessage /> {/* Display validation message if any */}
                  </FormItem>
                )}
              />

              {/* Last Name field */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md font-medium">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field} // Attach react-hook-form field logic
                        placeholder="Enter Last name"
                        className="border rounded-md p-6 w-full text-base"
                      />
                    </FormControl>
                    <FormMessage /> {/* Display validation message if any */}
                  </FormItem>
                )}
              />

              {/* Email field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field} // Attach react-hook-form field logic
                        placeholder="Enter Email"
                        className="border rounded-md p-6 w-full text-base"
                      />
                    </FormControl>
                    <FormMessage /> {/* Display validation message if any */}
                  </FormItem>
                )}
              />

              {/* Password field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field} // Attach react-hook-form field logic
                        placeholder="Enter Password"
                        className="border rounded-md p-6 w-full text-base"
                      />
                    </FormControl>
                    <FormMessage /> {/* Display validation message if any */}
                  </FormItem>
                )}
              />

              {/* Submit button */}
              <Button
                type="submit" // Submit form
                className="border rounded-xl p-6 w-full text-lg font-semibold bg-orange-500 text-white hover:bg-orange-600 mt-1"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ShadcnForm;

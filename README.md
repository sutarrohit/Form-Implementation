# Form Demo Project

This project demonstrates different approaches to building forms in React. It includes three routes, each showcasing a unique way to handle form state, validation, and submission.

## Routes

- `/simpleForm` - A basic HTML form example without any React hooks.
- `/reactForm` - A React form example utilizing `useState` and controlled components.
- `/shadcnForm` - A form built using the [shadcn/ui](https://ui.shadcn.dev/) component library for a more complex form with additional UI elements.

## Project Structure

src/ ├── components/ │ └── SimpleForm.tsx │ └── ReactForm.tsx │ └── ShadcnForm.tsx ├── hooks/ │ └── use-toast.ts ├── pages/ │ └── simpleForm.tsx │ └── reactForm.tsx │ └── shadcnForm.tsx └── App.tsx

### 1. Simple Form (`/simpleForm`)

This route contains a plain HTML form, with minimal JavaScript or React logic. It illustrates the most basic way to gather input from users using form fields.

### 2. React Form (`/reactForm`)

This route shows how to manage form state using React’s `useState` hook. It covers:

- Controlled components
- Form validation with basic checks for empty fields
- Handling form submissions and resetting the form after submission

### 3. Shadcn Form (`/shadcnForm`)

This form leverages the `shadcn/ui` component library for an enhanced UI experience. The form includes:

- Styled form components like buttons, inputs, and toasts
- Form validation and feedback using the toast notification system

## Getting Started

To get started with this project, clone the repository and install the dependencies.

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-repo/form-demo.git
   ```

import { object, ref, string } from "yup";

export const signupSchema = object({
  email: string().email().required("Email is required"),
  phone_number: string().min(10).required("Phone Number is required"),
  password: string().required("Password is required").min(5),
  confirm_password: string()
    .oneOf([ref("password"), undefined], "Password must match")
    .required("Confirm Password is required"),
});

export const signinSchema = object({
  email: string().email().required("Email is required"),
  password: string().required("Password is required"),
});

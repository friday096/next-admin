"use client";
import { toast } from 'react-toastify';
import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css"


const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: "Admin@2024//",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      // Handle form submission logic here
      try {
        console.log("Form submitted:", values);
        
        // Call your authentication function
        const data = await authenticate(values);
        console.log('Authentication result:', data);
        if(data == 'Wrong Credentials'){
          toast.error(data);
        }else{
          toast.success("Login successful");     

        }
        
      } catch (error) {
        // Handle authentication error
        console.error('Authentication error:', error);
        toast.error("Login failed");
      }
    },
  });
  return (
    <div className={styles.Authcontainer}>
      <form className={styles.Authform} onSubmit={formik.handleSubmit} >
        <div className={styles.AuthFormContent}>
          <h3 className={styles.AuthFormTitle}>Log In</h3>
          <div className="form-group mt-3">
            <label className={styles.AuthLabel}>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-group mt-3">
            <label className={styles.AuthLabel}>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              name="password"
              placeholder="Enter password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={formik.handleSubmit}>
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

"use client";
// AddCategoryPage.jsx

import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/formui/addForm.module.css"
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import * as Yup from "yup";


const AddCategoryPage = () => {

  const formik = useFormik({
    initialValues: {
      category: "",
    },
    validationSchema: Yup.object({
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: async (values) => {
      // Handle form submission logic here
      try {
        console.log("Category submitted:", values);
      
        
      } catch (error) {
        // Handle authentication error
        console.error('Authentication error:', error);
        toast.error("Login failed");
      }
    },
  });

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div>
        <input  
            type="text"
            className="form-control mt-1"
            placeholder="Enter category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category} 
        />
        {formik.touched.category && formik.errors.category && (
          <div className="text-danger">{formik.errors.category}</div>
        )}
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCategoryPage;


'use client'

import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styles from "./components.module.css";
import { useRouter } from 'next/navigation'

const MyInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className={styles.myinput}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={ styles.error }>{meta.error}</div>
        ) : null}
      </div>
    );
};

export default function MailForm(){    
    const router = useRouter();
    return(
        <div>
            <Formik 
                initialValues = {{
                    email : ""
                }}
                validationSchema = {Yup.object({
                    email: Yup.string().email("Invalid email address`").required("Required")
                })}
                onSubmit={async (values, { setSubmitting }) => {                    
                    await new Promise(r => setTimeout(r, 1000));
                    router.push("/Confirmation")
                    setSubmitting(false);
                }}
            >
            {(formik) => { return (
                <Form>
                    <MyInput
                        label="Email address"
                        name="email"
                        type="email"
                        placeholder="name@email.com"
                    />
                    <button
                        type="submit" 
                        className={styles.button}
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        Subscribe to monthly newsletter
                    </button>
                    
                </Form>
            )}}
            </Formik>
        </div>
    );
}
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
};

export default function MailForm(){
    return(
        <div>
            <Formik 
                initialValues = {{
                    email : ""
                }}
                validationSchema = {Yup.object({
                    email: Yup.string().email("Invalid email addresss`").required("Required")
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    await new Promise(r => setTimeout(r, 1000));
                    setSubmitting(false);
                }}
            >
                <Form>
                    <MyInput
                        label="Email address"
                        name="email"
                        type="email"
                        placeholder="name@email.com"
                    />
                    <button type="submit">Subscribe to monthly newsletter</button>
                </Form>

            </Formik>
        </div>
    );
}
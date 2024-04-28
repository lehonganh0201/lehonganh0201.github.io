import { useFormik, Formik, Field, Form } from "formik";
import { registerValidate } from "../../utils/registerValidate";
import "./Register.scss"
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="container-center auth">
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={registerValidate}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({errors,touched}) => (
          <Form className="auth-form">
            <h1 className="h1-title">Register</h1>
            <br />
            <Field type="email" placeholder="Email" name="email" className='auth-inp' />
            {errors.email && touched.email && (
              <p>{errors.email}</p>
            )}
            <br />
            <Field type="password" placeholder="Password" name="password" className='auth-inp' />
            {errors.password && touched.password && (
              <p>{errors.password}</p>
            )}
            <br />
            
            <button type="submit" className="btn btn-success">Register</button>
            <h5>You have an account? <Link to={"/login"}>Login</Link></h5>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;

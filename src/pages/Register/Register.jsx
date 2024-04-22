import { useFormik, Formik, Field, Form } from "formik";
import { registerValidate } from "../../utils/registerValidate";

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
        }}
        validationSchema={registerValidate}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({errors,touched}) => (
          <Form>
            <h1>Register</h1>
            <br />
            <Field type="text" placeholder="username" name="username" />
            {errors.username && touched.username && (
              <p>{errors.username}</p>
            )}
            <br />
            <Field type="password" placeholder="password" name="password" />
            {errors.password && touched.password && (
              <p>{errors.password}</p>
            )}
            <br />
            <Field type="email" placeholder="email" name="email" />
            {errors.email && touched.email && (
              <p>{errors.email}</p>
            )}

            <br />
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;

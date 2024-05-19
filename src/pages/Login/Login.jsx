import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik, Formik, Field, Form } from "formik";
import './Login.scss'

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required("Username cannot blank")
            .min(5, "Username must be 5 character")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/, "Username must maches"),
          password: Yup.string()
            .required("Password cannot blank")
            .min(8, "Password must be 8 character")
            .matches(
              /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
              "Password sai định dạng"
            ),
        })}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ errors, touched }) => (
          <Form className="login-container">
            <div className="login-form">
              <h2>Login</h2>
              <div>
                <label>Username:</label>
                <Field type="text" name="username" />
                <span>
                  {errors.username && touched.username && (
                    <p style={{ color: "red" }}>{errors.username}</p>
                  )}
                </span>
              </div>
              <div>
                <label>Password:</label>
                <Field type="password" name="password" />

                <span>
                  {errors.password && touched.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )}
                </span>
              </div>
              <button type="submit">Login</button>
              <p className="create-account">
                Not Registered? <a href="#">Create An Account</a>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
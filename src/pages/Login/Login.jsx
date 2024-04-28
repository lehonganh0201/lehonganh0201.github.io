import React, { useState } from "react";
import "./Login.scss";
import * as Yup from "yup";
import axios from 'axios';
import { useFormik, Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async(data) => {
          try{
            const result = await axios.post("https://reqres.in/api/login", data);
            console.log(result.data);
            localStorage.setItem("login", result.data.token);
          }catch(error){
            console.log(error);
          }
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
                Not Registered? <Link to={"/sign-up"}>Create An Account</Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

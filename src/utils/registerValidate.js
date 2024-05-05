import * as Yup from 'yup';

export const registerValidate = () => (
    Yup.object({
        username: Yup.string().required("Username is not blank"),
        email: Yup.string().required("Email is not blank"),
        password: Yup.string()
          .required("Password is not blank")
          .oneOf([Yup.ref("username")], "Password khong giong username"),
      })
)

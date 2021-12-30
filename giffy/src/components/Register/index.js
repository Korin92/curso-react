import React, { useState } from "react";
import register from "../../services/register";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validateFields = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Nombre de usuario requerido";
  }
  if (!values.password) {
    errors.password = "Contraseña requerida";
  } else if (values.password.length < 3) {
    errors.password = "La contraseña debe ser mayor de 3 caracteres";
  }
  return errors;
};

const initialValues = { username: "", password: "" };

export default function Register() {
  const [registered, setRegistered] = useState(false);

  if (registered) {
    return <h2>¡Éxito en el registro! ✅</h2>;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={(values, { setFieldError }) => {
          return register(values)
            .then(() => {
              setRegistered(true);
            })
            .catch(() => {
              setFieldError("username", "Nombre de usuario no válido");
            });
        }}
      >
        {({ errors, isSubmitting }) => (
          <div className="div-form">
            <Form className="form">
              <Field
                className={errors.username ? "error" : ""}
                name="username"
                placeholder="Nombre de usuario"
              />
              <ErrorMessage
                className="form-error"
                name="username"
                component="small"
              />
              <Field
                className={errors.password ? "error" : ""}
                name="password"
                placeholder="Constraseña"
                type="password"
              />
              <ErrorMessage
                className="form-error"
                name="password"
                component="small"
              />

              <button className="btn" disabled={isSubmitting}>
                Registrarse
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

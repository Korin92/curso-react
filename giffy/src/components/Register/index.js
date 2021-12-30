import React, { useState } from "react";
import registerService from "../../services/register";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (values) => {
    setIsSubmitting(true);
    registerService(values).then(() => {
      setRegistered(true);
      setIsSubmitting(false);
    });
  };

  if (registered) {
    return <h2>¡Éxito en el registro! ✅</h2>;
  }

  return (
    <>
      <div className="div-form">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={errors.username ? "error" : ""}
            name="username"
            placeholder="Nombre de usuario"
            {...register("username", {
              required: "Campo requerido",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ message }) => (
              <small className="form-error">{message}</small>
            )}
          />

          <input
            className={errors.password ? "error" : ""}
            name="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "Campo requerido",
            })}
            type="password"
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <small className="form-error">{message}</small>
            )}
          />

          <button className="btn" disabled={isSubmitting}>
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
}

import React from "react";
import { useLoginForm } from "../model/use-login-form";
import { Input } from "@/shared/components/ui/input";

export const LoginForm = () => {
  const {
    fetchStudents,
    form: { register },
    handleSubmit,
    isGetStudentsLoading,
    isLoginLoading,
    dataStudents,
  } = useLoginForm();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input {...register("userName")} />
        <Input {...register("password")} />

        <button type="submit">
          {isLoginLoading ? "loading..." : "login"}
        </button>
      </form>

      <button onClick={() => fetchStudents("")}>get data</button>
      {isGetStudentsLoading
        ? "LOADING STUDENTS..."
        : dataStudents?.map((item) => {
            return (
              <div style={{ border: "1px solid black", margin: "5px" }}>
                <p>{item.lastName}</p>
                <p>{item.firstName}</p>
                <p>{item.email}</p>
              </div>
            );
          })}
    </div>
  );
};

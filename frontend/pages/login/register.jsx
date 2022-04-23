import React from "react";
import CanvasLanding from "../../components/canvasLanding";
import Link from "next/link";
import { Field, Form, Formik } from "formik";

function Register() {
  return (
    <CanvasLanding>
      <div className="text-white text-2xl mt-10 pl-5">
        <h1 className="font-black">On Time</h1>
        <h2>Register</h2>
      </div>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={(data, { setSubmitting }) => {
          setTimeout(() => {
            console.log(data);
            setSubmitting(false);
          }, 500);
        }}
      >
        {({}) => (
          <Form className="text-white mx-5 mt-5 flex flex-col gap-1">
            <label className="font-light text-sm">Name</label>
            <Field
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
              type="text"
              name="name"
              placeholder="Name"
            />
            <label className="font-light mt-5 text-sm">Username</label>
            <Field
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
              type="text"
              name="username"
              placeholder="Username"
            />
            <label className="font-light mt-5 text-sm">Email</label>
            <Field
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
              type="email"
              name="email"
              placeholder="Email"
            />
            <label className="font-light mt-5 text-sm">Password</label>
            <Field
              className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-white w-full"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="h-10 w-full mt-6 text-sm bg-gradient-to-r from-grad4 to-grad1 rounded-md text-white hover:opacity-80 transition duration-300 flex justify-center items-center"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
      <div className="text-center text-xs text-white font-light mx-5 mt-14">
        <h3>
          Already Have an Account?{" "}
          <Link href={"/login"}>
            <a className="font-bold hover:opacity-80 transition">Here</a>
          </Link>
        </h3>
      </div>
    </CanvasLanding>
  );
}

export default Register;

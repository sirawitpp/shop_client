import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { RxCrossCircled } from "react-icons/rx";

type Props = {
  setComponent: React.Dispatch<
    React.SetStateAction<{
      register: boolean;
      login: boolean;
    }>
  >;
  component: {
    register: boolean;
    login: boolean;
  };

  submitDbg?: jest.Mock<any, any>;
};

const Register = ({ setComponent, component, submitDbg }: Props) => {
  const [toCenter, setToCenter] = useState(false);
  useEffect(() => {
    setToCenter(!toCenter);
  }, []);

  return (
    <div className="absolute">
      <div
        className="fixed h-screen w-full bg-black/20"
        onClick={() => {
          setComponent({ ...component, register: !component.register });
        }}
      ></div>
      <div
        className={
          toCenter
            ? "fixed top-[20%] w-[100%] transition-all duration-500 h-[450px] md:w-[50%] md:left-[25%] bg-white  border-2  rounded-lg shadow-lg"
            : "fixed top-[100%] w-[100%] transition-all duration-500 h-[450px] md:w-[50%] md:left-[25%] bg-white  border-2  rounded-lg shadow-lg"
        }
      >
        <div className="p-4 px-9">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-3xl my-1">Register 📝</h1>
              <p className="font-semibold">Let's create your account.</p>
            </div>
            <div
              onClick={() => {
                setComponent({ ...component, register: !component.register });
              }}
              className="cursor-pointer mt-1"
            >
              <RxCrossCircled className="" size={22} />
            </div>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              username: "",
              confirmPassword: "",
            }}
            // validate={(values) => {
            //   const errors: {
            //     email: string;
            //     username: string;
            //     password: string;
            //     confirmPassword: string;
            //   } = {
            //     email: "",
            //     username: "",
            //     password: "",
            //     confirmPassword: "",
            //   };
            //   if (!values.email) {
            //     errors.email = "Required";
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //   ) {
            //     errors.email = "Invalid email address";
            //   }
            //   return errors;
            // }}
            onSubmit={(values, { setSubmitting }) => {
              if (submitDbg) {
                submitDbg(values);
              }
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col mt-12 gap-8"
              >
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                  className="border-b-4  p-1 rounded-sm"
                />
                {errors.username && touched.username && errors.username}
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Username"
                  className="border-b-4  p-1 rounded-sm"
                />
                {errors.email && touched.email && errors.email}
                <div className="flex w-full md:gap-6  gap-2">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                    className="border-b-4 p-1 rounded-sm w-full"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    placeholder="Confirm Password"
                    className="border-b-4 p-1 rounded-sm w-full"
                  />
                </div>
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-rose-500 shadow-md hover:bg-rose-600 hover:underline text-zinc-50 font-semibold w-[120px] p-2 mx-auto rounded-md"
                >
                  Submit
                </button>
                <div className="text-sm text-center">
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      setComponent({
                        login: !component.login,
                        register: !component.register,
                      });
                    }}
                    className="cursor-pointer underline text-sky-400"
                  >
                    Login here
                  </span>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;

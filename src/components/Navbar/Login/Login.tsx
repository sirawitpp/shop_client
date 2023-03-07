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

const Login = ({ setComponent, component, submitDbg }: Props) => {
  const [toCenter, setToCenter] = useState(false);
  useEffect(() => {
    setToCenter(!toCenter);
  }, []);

  return (
    <div className="absolute">
      <div
        className="fixed h-screen w-full bg-black/20"
        onClick={() => {
          setComponent({ ...component, login: !component.login });
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
              <h1 className="font-bold text-3xl my-1">Login 📝</h1>
              <p className="font-semibold">Have a good day :D</p>
            </div>
            <div
              onClick={() => {
                setComponent({ ...component, login: !component.login });
              }}
              className="cursor-pointer mt-1"
            >
              <RxCrossCircled className="" size={22} />
            </div>
          </div>
          <Formik
            initialValues={{
              password: "",
              username: "",
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
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Username"
                  className="border-b-4  p-1 rounded-sm"
                />
                {errors.username && touched.username && errors.username}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                  className="border-b-4 p-1 rounded-sm w-full"
                />
                {errors.password && touched.password && errors.password}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-rose-500 shadow-md hover:bg-rose-600 hover:underline text-zinc-50 font-semibold w-[120px] p-2 mx-auto rounded-md"
                >
                  Log in
                </button>
                <div className="text-sm text-center">
                  Don't have an account?{" "}
                  <span
                    className="cursor-pointer underline text-sky-400"
                    onClick={() => {
                      setComponent({
                        login: !component.login,
                        register: !component.register,
                      });
                    }}
                  >
                    Register
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

export default Login;

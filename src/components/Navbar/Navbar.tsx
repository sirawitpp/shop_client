import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import Register from "./Register/Register";
import Signin from "./Login/Login";

type Props = {};

const Navbar = (props: Props) => {
  const [component, setComponent] = useState({
    register: false,
    login: false,
  });
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed h-[70px] bg-rose-500 w-full">
      {component.register && (
        <Register setComponent={setComponent} component={component} />
      )}

      {component.login && (
        <Signin setComponent={setComponent} component={component} />
      )}
      <div className="flex justify-between md:px-12 px-6 text-zinc-100 h-full items-center">
        <a
          href="/"
          className="md:text-[35px] text-[25px] font-semibold hover:underline cursor-pointer"
        >
          Eieieieie
        </a>

        {/* small */}
        <div
          className="md:hidden fixed right-[20px] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <IoIosMenu size={26} />
        </div>
        <div
          onClick={() => setOpen(false)}
          className={
            open
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        ></div>
        <div
          className={
            open
              ? " sm:w-[60%] md:w-[45%] pl-8 pt-[100px] bg-rose-500  h-screen text-zinc-100 fixed   w-[75%] left-0 top-0 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 pl-8 pt-[100px] ease-in duration-500"
          }
        >
          <div
            onClick={() => setOpen(!open)}
            className="absolute top-[40px]  right-[40px] cursor-pointer"
          >
            <RxCrossCircled className="" size={30} />
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-2">
              <p className="text-[50px] font-semibold">Eeieieie</p>
              <hr className="w-[80%] text-center" />
            </div>
            <a href="/" className="cursor-pointer hover:underline w-fit">
              HOME
            </a>
            <p
              className="cursor-pointer hover:underline w-fit"
              onClick={() => {
                setOpen(!open);
                setComponent({ ...component, login: !component.login });
              }}
            >
              LOG IN
            </p>
            <p
              className="cursor-pointer hover:underline w-fit"
              onClick={() => {
                setOpen(!open);
                setComponent({ ...component, register: !component.register });
              }}
            >
              REGISTER
            </p>
          </div>
        </div>
        {/* small */}

        {/* medium */}
        <div className="hidden md:flex text-[18px] w-[250px] justify-between">
          <a href="/" className="hover:underline">
            Home
          </a>
          <p
            className="hover:underline cursor-pointer"
            onClick={() => {
              setComponent({ ...component, login: !component.login });
            }}
          >
            Log in
          </p>
          <p
            className="hover:underline cursor-pointer"
            onClick={() => {
              setComponent({ ...component, register: !component.register });
            }}
          >
            Register
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { useState } from "react";
import LogIn from "../Login";

export default function LandingPage(props) {
  const { navLink, logo, loginPage } = props;
  const [buttonLogin, setButtonLogin] = useState(false);
  const handleLogin = () => {
    setButtonLogin(!buttonLogin);
  };
  return (
    <header className="w-full h-screen bg-center bg-cover bg-hero">
      <Navbar fluid rounded className="container mx-auto bg-transparent">
        <NavbarBrand href="#">
          <span className="text-xl font-semibold text-orange-400 md:text-2xl lg:text-4xl whitespace-nowrap dark:text-white">
            {logo}
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button
            onClick={handleLogin}
            className="mr-2"
            gradientDuoTone="pinkToOrange"
          >
            Login
          </Button>
          <NavbarToggle />
          {buttonLogin && (
            <LogIn handleLoginPage={handleLogin} loginData={loginPage} />
          )}
        </div>
        <NavbarCollapse className="relative">
          {navLink.map((item) => (
            <NavbarLink
              key={item}
              className="relative text-white hover:bg-orange-500"
              href="#"
            >
              {item}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>

      <div className="flex flex-col items-center gap-4 mx-auto mt-10 ">
        <h1 className="text-3xl font-bold text-center text-white sm:w-4/5 md:w-3/5 md:leading-snug lg:leading-tight lg:w-3/5 md:text-4xl lg:text-5xl">
          Make Your Interior More Minimalistic & Modern
        </h1>
        <p className="text-sm font-thin text-center text-slate-400 sm:w-3/5 md:w-1/2 lg:w-1/3 md:text-base md:leading-relaxed">
          Turn your room with {logo} into a lot more minimalist and modern with
          ease and speed
        </p>
      </div>

      <div className="w-full mx-auto mt-3 text-center">
        <input
          type="text"
          placeholder="Search Furniture"
          className="px-4 mx-auto text-white bg-transparent rounded-full w-80 backdrop-blur-sm"
        />
      </div>
    </header>
  );
}

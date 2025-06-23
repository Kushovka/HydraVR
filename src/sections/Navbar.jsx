import logo from "/images/logo.svg";
import { navItems } from "../constants";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="home">
      <div
        className={clsx(
          "container z-50 fixed mx-auto left-1/2 -translate-x-1/2 transition-all duration-300 px-4 md:px-8",
          isScrolled
            ? "py-2 mt-2 bg-black/40 backdrop-blur-md rounded-[40px]"
            : "py-5"
        )}
      >
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center justify-center px-8 overflow-hidden">
            <a href="#home">
              <img
                className="sm:size-32 size-24 object-contain"
                src={logo}
                alt="logo"
              />
            </a>
          </div>
          {/* navItems */}
          <div className="lg:flex items-center justify-center hidden gap-5 md:gap-10">
            {navItems.map((navItem, i) => (
              <div
                key={i}
                className="relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                <a
                  className="xl:text-sm lg:text-[12px] text-white font-semibold"
                  href={navItem.href}
                >
                  {navItem.name}
                </a>
              </div>
            ))}
          </div>
          {/* btn */}
          <div className="lg:flex items-center justify-center hidden gap-5 md:gap-10">
            <button
              className="border-2 rounded-[40px] z-20 border-white py-2 px-6 lg:py-3 lg:px-6 xl:py-4 xl:px-9 text-xs text-white font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
              type="submit"
            >
              CONTACT US
            </button>
            <Button title="JOIN HYDRA" />
          </div>
          {/* mobile */}
          <div className="lg:hidden flex items-center px-12">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <IoMdClose className="size-8 text-[#C0B7E8]" />
              ) : (
                <RiMenu3Fill className="size-7 text-[#C0B7E8]" />
              )}
            </button>
          </div>
        </div>

        <div>
          {isOpen && (
            <div
              className={clsx(
                "lg:hidden rounded-[40px] text-white py-20",
                isScrolled ? "text-white" : "bg-black/80 backdrop-blur-md"
              )}
            >
              <div className="flex flex-col items-center justify-center gap-8">
                {navItems.map((item, i) => (
                  <a key={i} href={item.href} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

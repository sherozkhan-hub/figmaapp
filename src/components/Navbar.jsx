/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Navbar = forwardRef((props, ref) => {
  return (
    <nav
      ref={ref}
      className="md:flex justify-between my-[2.62rem] place-items-center lg:max-w-[75rem] mx-auto"
    >
      <div className="flex  text-[1.69669rem]">
        <h2 className="font-[700]">A+</h2>
        <h2 className="font-normal">Studio</h2>
      </div>
      <ul className="md:flex text-[1rem] font-normal tracking-[0.1rem]">
        <li className="mr-[3rem]">
          <a href="" className="text-[#000000] font-semibold">
            Home
          </a>
        </li>
        <li className="mr-[3rem]">
          <a href="" className="text-[#000000] font-semibold">
            What We Do
          </a>
        </li>
        <li className="mr-[3rem]">
          <a href="" className="text-[#000000] font-semibold">
            Service
          </a>
        </li>
        <li className="mr-[3rem]">
          <a href="" className="text-[#000000] font-semibold">
            Project
          </a>
        </li>
        <li className="mr-[3rem]">
          <a href="" className="text-[#000000] font-semibold">
            Blog
          </a>
        </li>
        <li className="mr-[3rem]">
          <a href="" className="text-[#000000] font-semibold">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
});

export default Navbar;

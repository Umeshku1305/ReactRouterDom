import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex items-center p-3 text-xl font-semibold justify-between">
      <h1>Brand name</h1>
      <input className="px-3 py-2 bg-red-300 rounded-md " type="text" placeholder="Search bar" />
      <div className="flex items-center justify-center gap-4">
        <Link to="/" />
        Home 
        <Link />
        <Link to="/contact" />
        About
        <Link />
        <Link to="/enquiry" />
        Contact
        <Link />
      </div>
    </div>
  );
};

export default Navbar;

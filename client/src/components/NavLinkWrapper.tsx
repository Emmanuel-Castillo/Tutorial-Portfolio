import React from "react";
import { Link } from "../projects";

type NavLinkWrapperProps = {
  link: Link;
};
const NavLinkWrapper = ({ link }: NavLinkWrapperProps) => {
  return (
    <li className="nav__link">
      <a
        href={link.url}
        className="nav__link--anchor link__hover-effect link__hover-effect--black"
      >
        {link.name}
      </a>
    </li>
  );
};

export default NavLinkWrapper;

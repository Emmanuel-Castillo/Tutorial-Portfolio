import React from "react";
import { Link } from "../projects";

type FooterLinkWrapperProps = {
  link: Link;
};
const FooterLinkWrapper = ({ link }: FooterLinkWrapperProps) => {
  return (
    <a
      href={link.url}
      className="
          footer__social--link 
          link__hover-effect 
          link__hover-effect--white"
      target="_blank"
    >
      {link.name}
    </a>
  );
};

export default FooterLinkWrapper;

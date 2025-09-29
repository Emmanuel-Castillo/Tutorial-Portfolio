import React from "react";
import { Link } from "../projects";

type LanguageWrapperProps = {
  language: Link;
};
const LanguageWrapper = ({ language }: LanguageWrapperProps) => {
  return (
    <div className="language">
      <figure className="language__img--wrapper">
        <img src={language.url} alt={language.name} className="language__img" />
      </figure>
      <span className="language__name">{language.name}</span>
    </div>
  );
};

export default LanguageWrapper;

import React from "react";

function Header({ title, subTitle }) {
  return (
    <h1 className="tittle">
      {title}
      <span className="subtitle"> {subTitle}</span>
    </h1>
  );
}

export default Header;

import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const mappedLinks = links.map((link, index) => {
    return <a key={index} href={`#${link}`} >{link}</a>
  })

  return <nav>{mappedLinks}</nav>;
}

export default NavBar;

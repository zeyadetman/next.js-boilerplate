import React from "react";
import Nav from "../Nav";

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <div
      style={{
        color: "#fff",
        background: "#111",
        padding: "1rem",
        marginBottom: "2rem",
      }}
    >
      <Nav />
    </div>
  );
}

export default Header;

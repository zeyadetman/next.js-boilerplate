import React from "react";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <footer
      style={{
        marginTop: "2rem",
        backgroundColor: "#111",
        color: "#fff",
        height: "3rem",
        padding: "1rem",
      }}
    >
      Footer
    </footer>
  );
}

export default Footer;

import React from "react";
import Link from "next/link";

interface Props {}

function Nav(props: Props) {
  const {} = props;

  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "0 1rem",
        }}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

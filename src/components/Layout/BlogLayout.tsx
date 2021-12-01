import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

function BlogLayout(props: Props) {
  const { children } = props;

  return (
    <main>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "0 1rem",
            backgroundColor: "#777",
            color: "#fff",
            padding: "1rem",
            marginTop: "-2rem",
          }}
        >
          <li>
            <Link href="/blog/topic/all">All</Link>
          </li>
          <li>
            <Link href="/blog/topic/development">Development</Link>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "1rem",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <main>{children}</main>
        <aside>Subscribe</aside>
      </div>
    </main>
  );
}

export default BlogLayout;

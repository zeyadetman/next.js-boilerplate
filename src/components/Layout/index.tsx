import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  console.log("Layout");

  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "80vh",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;

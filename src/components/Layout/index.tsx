import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

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

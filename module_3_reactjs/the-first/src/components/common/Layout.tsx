import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div>
      <Header /> {/**component này là component không có props */}
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

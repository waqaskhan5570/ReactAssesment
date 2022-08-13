import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
function ContainerLayout(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}

export default ContainerLayout;

import React from "react";
import Footer from "../../component/footer/Footer";
import Form from "../../component/form/Form";
import Navbar from "../../component/navbar/Navbar";

export default function NewPost() {
  return (
    <div>
      <Navbar new={"new"}>
        {" "}
        <Form />
      </Navbar>
      <Footer/>
    </div>
  );
}

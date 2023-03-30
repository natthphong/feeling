import React from "react";
import NewFooter from "../../component/footer/NewFooter";
import Form from "../../component/form/Form";
import Navbar from "../../component/navbar/Navbar";

export default function NewPost() {
  return (
    <div>
      <Navbar new={"new"}>
        {" "}
        <Form />
      </Navbar>
      <NewFooter/>
    </div>
  );
}

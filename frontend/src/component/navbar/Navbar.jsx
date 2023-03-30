import React from "react";
import "./navbar.css";
export default function Navbar(props) {

  return (
    <div className="container">
      <div className="navbar">
        <div className="nav-left">
          <a href="/" className="confignav">
            <img src="/logo.png" alt="" className="logo" />
          </a>
          {props.detail!== "detail" &&<h2>วันนี้คุณมีอะไรอยากระบายบ้างไหม ...</h2>}
          {props.detail=== "detail" &&<h2>มาดูคนอื่นแสดงความคิดเห็นกันเถอะ...</h2>}
        </div>
        <div className="nav-right">
          {props.new !== "new" && (
            <a href="/create" className="confignav">
              {" "}
              <div className="btn">สร้างโพสไหม่</div>
            </a>
          )}
        </div>
      </div>
      {props.children}
    </div>
  );
}

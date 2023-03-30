import React from "react";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="connavbar">
      <div className="navbar">
        <div className="navbarcontent">
          <a href="/" className="confignav">
            <img src="/logo.png" alt="" className="logo" />
            <h2>วันนี้คุณมีอะไรอยากระบายบ้างไหม ...</h2>
          </a>
          <a href="/create" className="confignav">
            {" "}
            <div className="btn">สร้างโพสไหม่</div>
          </a>
        </div>
      </div>
    </div>
  );
}

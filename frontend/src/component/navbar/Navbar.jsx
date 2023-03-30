import React from "react";
import "./navbar.css";
export default function Navbar({ children }) {
	return (
		<div className="container">
			<div className="navbar">
				<div className="nav-left">
					<a href="/" className="confignav">
						<img src="/logo.png" alt="" className="logo" />
					</a>
					<h2>วันนี้คุณมีอะไรอยากระบายบ้างไหม ...</h2>
				</div>
				<div className="nav-right">
					<a href="/create" className="confignav">
						{" "}
						<div className="btn">สร้างโพสไหม่</div>
					</a>
				</div>
			</div>
			{children}
		</div>
	);
}

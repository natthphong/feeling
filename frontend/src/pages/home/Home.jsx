import React from "react";
import Footer from "../../component/footer/Footer";

import List from "../../component/list/List";
import Navbar from "../../component/navbar/Navbar";
import "./home.css";
export default function Home() {
	return (
		<div className="main-container">
			<Navbar>
				<List />
			</Navbar>
  
    <Footer/>

		</div>
	);
}

import React from "react";
import NewFooter from "../../component/footer/NewFooter";
import List from "../../component/list/List";
import Navbar from "../../component/navbar/Navbar";
import "./home.css";
export default function Home() {
	return (
		<div className="main-container">
			<Navbar>
				<List />
			</Navbar>
  
			<NewFooter/>

		</div>
	);
}

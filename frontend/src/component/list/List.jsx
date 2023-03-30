import React, { useEffect, useState } from "react";
import axios from "axios";
import "./list.css";
import Post from "../post/Post";
import { viewPost } from "../../api/post";
export default function List() {
	const [data, setData] = useState(null);

	const fetchData = async () => {
		try {
			const { data } = await axios.get(viewPost);
			setData(data);
		} catch (error) {
			alert("api not responding");
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const PostComponents = data?.map((item) => (
		<Post object={item} key={item.id} />
	));

	return (
		<div className="list-container">
			<div className="container1">{PostComponents}</div>
		</div>
	);
}

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

  const delte = (id)=>{
      const filter = data.filter((e)=> e.id!==id)
      setData(filter)
  }

  const update = (id , object)=>{
    console.log(id , object)
    const filter = data.map((e)=> {if(e.id!==id){return e}else return object })
    setData(filter)
  }


	const PostComponents = data?.map((item) => (
		<Post object={item} delte={delte} funUpdate={update} key={item.id} />
	));

	return (
		<div className="list-container">
			<div className="container1">{PostComponents}</div>
		</div>
	);
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { viewPost } from "../../api/post";
import Box from "./Box";

export default function Comments({ postid , comments }) {
    const [coms, setComs] = useState(comments)
    const [toggle, setToggle] = useState(false)
  let res;

    const re = ()=>{
        setToggle(!toggle)
    }

    const fetch = async()=>{
        const res = await axios.get(`${viewPost}/${postid}`);
        setComs(res.data.comments);
    }

    useEffect(() => {
        fetch()
      
    }, [toggle])
    


  if (coms === null || coms.length <= 0) {

    res = <div></div>;

  } else {
    res = coms.map((e)=><Box key={e.id} object={e} postid={postid} re={re}/>);
  }
  return res;
}

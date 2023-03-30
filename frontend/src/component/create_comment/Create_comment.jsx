import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createComment } from "../../api/post";
import "./create_compose.css";
export default function Create_comment({ id , re }) {
  const [comment, setComment] = useState({
    name: "",
    content: "",
  });

  const handle = (e) => {
    setComment({ ...comment, [e.target.id]: e.target.value });
  };

  const navigator = useNavigate();
  const submitHandle = async (e) => {

    try {
        await axios.post(`${createComment}/${id}`, comment);
    } catch (error) {
        alert("Create Comment")
    }

  };

  return (
    <div className="create mv">
      <div className="postCon">
        <div className="titleCrate">
          <h2>แสดงความคิดเห็นของคุณ</h2>
          <form
            className="createContent"
            onSubmit={(e) => {
              submitHandle();
              navigator("/");
            }}
          >
            <div className="between">
              <label htmlFor="">ชื่อของคุณ : </label>
              <input
                className="inputComment"
                type="text"
                id="name"
                value={comment.name}
                onChange={handle}
                required
              />
            </div>
            <div className="between">
              <label htmlFor="">ความคิดเห็นของคุณ : </label>

              <textarea
                className="inputComment"
                name=""
                id="content"
                rows="4"
                value={comment.content}
                onChange={handle}
                required
              ></textarea>
            </div>
            <button className="btn">แสดงความคิดเห็น</button>
          </form>
        </div>
      </div>
    </div>
  );
}

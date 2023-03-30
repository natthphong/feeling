import axios from "axios";
import React, { useState } from "react";
import { deltePost, updatePost } from "../../api/post";
import Date_F from "../../until/Date_F";
import { IoIosTrash, IoMdConstruct } from "react-icons/io";
import "./post.css";
import { useNavigate } from "react-router-dom";
export default function Post({ object, delte, funUpdate, page }) {
  const [update, setUpdate] = useState(false);
  const [post, setPost] = useState(object);
  const navigate = useNavigate();
  const one = (e) => {
    navigate("/postDetail", { state: object });
  };
  let comment;
  if (object.comments === null || object.comments.length <= 0) {
    comment = (
      <div
        className={page !== "detail" ? "comment btn" : "comment"}
        onClick={one}
      >
        {page !== "detail" ? "ดูรายละเอียด" : "คุณไม่มีการแสดงความคิดเห็น"}
      </div>
    );
  } else {
    comment = (
      <div
        className={page !== "detail" ? "comment btn" : "comment"}
        onClick={one}
      >
        {page !== "detail"
          ? "ดูรายละเอียด"
          : ``}
      </div>
    );
  }

  const toggle = (e) => {
    setUpdate(!update);
  };
  const handle = (e) => {
    setPost({ ...post, [e.target.id]: e.target.value });
  };

  const deletePost = async (e) => {
    try {
      await axios.delete(`${deltePost}/${object.id}`);
      delte(object.id);
      setUpdate(!update);
    } catch (error) {
      alert("Delte Fail");
    }
  };

  const updatePut = async (e) => {
    try {
      await axios.put(`${updatePost}/${object.id}`, post).then(() => {
        funUpdate(post.id, post);
        setUpdate(!update);
      });
    } catch (error) {
      alert("Update Fail");
    }
  };

  return (
    <div className="conpost">
      {!update && (
        <div className="postCon">
          {page !== "detail" && (
            <div className="right-top">
              <div className="row">
                <IoMdConstruct size={35} className="update" onClick={toggle} />
                <IoIosTrash size={35} className="bin" onClick={deletePost} />
              </div>
            </div>
          )}
          <div className="titlePost">หัวข้อ :{object.title}</div>
          <div className="namePost">ข้อความจากคุณ : {object.name}</div>
          <div className="contentPost">เนื้อหา : {object.content}</div>

          <div className="datePost">
            เวลาที่โพสต์ : <Date_F str={object.date} />{" "}
          </div>
          {comment}
        </div>
      )}
      {update && (
        <div className="postCon">
          <form action="" className="form-update">
            <div className="rowinput">
              <label htmlFor="">หัวข้อ : </label>
              <input
                type="text"
                id="title"
                value={post.title}
                onChange={handle}
                className="inputUpdate"
              />
            </div>
            <div className="rowinput">
              <label htmlFor="">ข้อความจากคุณ : </label>
              <input
                type="text"
                id="name"
                value={post.name}
                onChange={handle}
                className="inputUpdate"
              />
            </div>
            <div className="rowinput">
              <label htmlFor="">เนื้อหา : </label>
              <textarea
                name=""
                className="inputUpdate"
                id="content"
                rows={3}
                value={post.content}
                onChange={handle}
              ></textarea>
            </div>
          </form>
          <div className="row-update">
            เวลาที่โพสต์ : <Date_F str={object.date} />{" "}
            <IoMdConstruct
              size={35}
              className="update-buttom update"
              onClick={updatePut}
            />
          </div>{" "}
        </div>
      )}
    </div>
  );
}

import axios from "axios";
import React from "react";
import { IoIosTrash } from "react-icons/io";
import { deletePath } from "../../api/post";
import Date_F from "../../until/Date_F";
import "./box.css";
export default function Box({ postid, object  , re}) {
  const deleteComment = async (e) => {
    try {
      await axios.delete(`${deletePath}/${postid}/${object.id}`);
      re()
    } catch (error) {
      alert("Delete Comment Fail");
    }
  };
  return (
    <div className="create">
      <div className="postCon">
        <IoIosTrash
          size={35}
          className="right-top bin"
          onClick={deleteComment}
        />
        <div className="content-comment">
          <div className="name-comment">
            แสดงความคิดเห็นจากคุณ : {object.name}
          </div>
        </div>
        <div className="name-comment mv-50">เนื้อหา : {object.content}</div>

        <div className="datePost">
          เวลาที่โพสต์ : <Date_F str={object.date} />{" "}
        </div>
      </div>
    </div>
  );
}

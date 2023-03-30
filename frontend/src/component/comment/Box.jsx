import axios from "axios";
import React from "react";
import { IoIosTrash } from "react-icons/io";
import { deletePath } from "../../api/post";
import Date_F from "../../until/Date_F";
import "./box.css";
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { confirmAlert } from 'react-confirm-alert'; 
export default function Box({ postid, object  , re}) {


  const confirmDelete = () => {
    confirmAlert({
      title:  'ลบแล้วมันจะหายไปเลยนะ...',
      message: 'คุณแน่ใจใช่ไหมที่จะลบความคิดเห็นนี้ ?',
      buttons: [
        {
          label: 'ใช่',
          onClick: () => deleteComment()
        },
        {
          label: 'ไม่',
          onClick: () => {}
        }
      ]
    });
  };

  const deleteComment = async () => {
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
          onClick={confirmDelete}
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

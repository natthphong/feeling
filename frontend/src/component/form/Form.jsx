import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../api/post";
import "./form.css";
export default function Form() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    content: "",
  });
  const navigate = useNavigate();
  const Create = async (e) => {
    await axios.post(createPost, form);
  };

  const handle = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div className="list-container">
      <div className="area-form">
        <form
          className="form-content"
          onSubmit={(e) => {
            Create(e);
            navigate("/");
          }}
        >
          <label htmlFor="">ชื่อผู้โพสต์ : </label>
          <input
            className="inputtext"
            type="text"
            name=""
            id="name"
            value={form.name}
            onChange={handle}
            required
          />
          <label htmlFor="">หัวข้อ : </label>
          <input
            className="inputtext"
            type="text"
            name=""
            id="title"
            value={form.title}
            onChange={handle}
            required
          />
          <label htmlFor="">เนื้อหา : </label>
          <textarea
            className="content-css"
            name=""
            id="content"
            cols="30"
            rows="3"
            value={form.content}
            onChange={handle}
            required
          ></textarea>
          <button className="btnNew">สร้างโพสไหม่</button>
        </form>
      </div>
    </div>
  );
}

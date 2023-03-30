import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NewPost from "./pages/newpost/NewPost";
import './App.css'
export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<NewPost />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

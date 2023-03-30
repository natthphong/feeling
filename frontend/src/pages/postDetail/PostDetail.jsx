import React from 'react'
import { useLocation } from 'react-router-dom';
import Comments from '../../component/comment/Comments';
import Create_comment from '../../component/create_comment/Create_comment';
import Footer from '../../component/footer/Footer'
import Navbar from '../../component/navbar/Navbar'
import Post from '../../component/post/Post'
import './postdetail.css'
export default function PostDetail() {

    
    const {state} = useLocation();
  return (
    <div>
    <Navbar new={"new"} detail={"detail"}>
        {" "}
        <div className='margin'>
        <Post object={state} page={"detail"}/>
        </div>
      
      </Navbar>

  
      <Comments postid={state.id} comments={state.comments}/>
      <Create_comment  id={state.id}/>
        <Footer/>
    </div>
    
  )
}

import React from 'react'
import Date_F from '../../until/Date_F'
import './post.css'
export default function Post({object}) {
  return (

    <div className="conpost">
    <div className='postCon'>
        <div className="delete">delete</div>
        <div className="titlePost">หัวข้อ : {object.title}</div>
        <div className="namePost">ข้อความจากคุณ : {object.name}</div> 
        <div className="contentPost">เนื้อหา : {object.content}</div> 
        <div className="datePost">เวลาที่โพสต์ : <Date_F str={object.date}/> </div> 
        {   object.comments.length <=0 &&
            <div className="comment">คุณไม่มีคอมเม้น</div>
        }
        {   object.comments.length>0 &&
            <div className="comment">มีคอมเม้น {object.comments.length}</div>

        }
    </div>
    </div>
  )
}

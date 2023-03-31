import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import './chat.css'
export default function Chat({stateUser, message }) {
  let flex 
  if(stateUser === message.user){
    flex = "flex-end"
  }else{
    flex =  "flex-start"
  }

  console.log(flex)


  return (
    <div  className={flex}>
      {" "}
      <Card
        key={message.msg}
        style={{
          margin: "4px 4px 0 4px",
        }}
       
        loading={false}
      >
        <Meta
          avatar={
            <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
              {message.user[0].toUpperCase()}
            </Avatar>
          }
          title={message.user + ":"}
          description={message.msg}
        />
      </Card>{" "}
    </div>
  );
}

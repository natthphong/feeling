import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {Input, Typography } from 'antd';
import './chat.css'
import Chat from './Chat';
const { Search } = Input;
const { Text } = Typography;

const client = new W3CWebSocket('ws://103.74.254.209:9111/chat');

export default class App extends Component {

  state ={
    userName: '',
    isLoggedIn: false,
    messages: []
  }


  onButtonClicked = (value) => {
    client.send(JSON.stringify({
      type: "message",
      msg: value,
      user: this.state.userName
    }));
    this.setState({ searchVal: '' })
  }

  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply! ', dataFromServer);
      if (dataFromServer.type === "message") {
        this.setState((state) =>
          ({
            messages: [...state.messages,
            {
              msg: dataFromServer.msg,
              user: dataFromServer.user
            }]
          })
        );
      }
    };
  }

  render() {

    return (
      <div className="main-message" id='wrapper'>
        {this.state.isLoggedIn ?
        <div>
          <div className="title-box">
            <h2>ช่องแชทการสนทนา</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 50 }} id="messages">
            {this.state.messages.map((message,i) => <Chat  stateUser={this.state.userName} message={message} key={i}/>)}
          </div>
          <div className="bottom">
            <Search
              placeholder="input message and send"
              enterButton="Send"
              value={this.state.searchVal}
              size="small"
              onChange={(e) => this.setState({ searchVal: e.target.value })}
              onSearch={value => this.onButtonClicked(value)}
            />
          </div> 
        </div>
        :
        <div style={{ padding: '200px 40px' }}>
          <Search
            placeholder="Enter Username"
            enterButton="Login"
            size="large"
            onSearch={value => this.setState({ isLoggedIn: true, userName: value })}
          />
        </div>
      }
      </div>
    )
  }
}

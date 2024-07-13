import React, { useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
import LeftArrowIcon from './assets/left-arrow-icon.svg';
import ListIcon from './assets/list-icon.svg';
import SendIcon from './assets/send-icon.svg';
import IChat from './components/IChat';
import YouChat from './components/YouChat';
import './App.css';

const ChatRoomContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
`

const ChatRoomTopBar = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  background-color: #f0f1f5;
`

const ChatRoomTitle = styled.div`
  color: #a0a0a0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.5px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ChatRoomContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 40px 0 48px;

  overflow-y: scroll;
`

const ChatInputBox = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;

  display: flex;
  flex-direction: row;

  padding: 8px 12px;
  background-color: #ffffffa0;
  backdrop-filter: blur(8px);
  gap: 8px;
`

const ChatInputText = styled.input`
  display: flex;
  background-color: #f0f1f5;
  flex-grow: 1;
  border: none;
  outline: none;
  border-radius: 16px;
`

function App() {
  const serverAddress = 'ws://floweryclover.starryflower.co.kr:31412';
  const socket = io(serverAddress);


  socket.emit('request-channel-join', {
    code: '1234'
  });
  socket.emit('request-set-nickname', {
    nickname: '234',
  });
  socket.emit('send-chat', {
    code: '1234',
    msg: '테스트용 채팅입니다',
  });

  socket.on('receive-chat', (data) => {
    console.log('정상');
    console.log(data.msg);
  });
  socket.on('error', (error) => {
    console.log('error');
    console.log(error);
  });
  return (
    <div className="App">
      <ChatRoomContainer>
        <ChatRoomTopBar>
          <img src={LeftArrowIcon} alt="left-arrow-icon" />
          <ChatRoomTitle>
            #1239
          </ChatRoomTitle>
          <img src={ListIcon} alt="list-icon" />
        </ChatRoomTopBar>
        <ChatRoomContent>
          <YouChat name="익명1" message="테스트용 채팅입니다" />
          <IChat message="테스트용 채팅입니다" />
          <YouChat name="익명23" message="테스트용 채팅입니다" />
          <YouChat name="익명23" message="테스트용 채팅입니다" />
          <YouChat name="익명23" message="테스트용 채팅입니다" />
          <IChat message="테스트용 채팅입니다" />
          <IChat message="테스트용 채팅입니다" />
          <IChat message="테스트용 채팅입니다" />
          <IChat message="테스트용 채팅입니다" />
          <IChat message="테스트용 채팅입니다" />
          <IChat message="테스트용 채팅입니다" />
          <IChat message="테스트용 채팅입니다" />
        </ChatRoomContent>
        <ChatInputBox>
          <ChatInputText>
          </ChatInputText>
          <img src={SendIcon} alt="send-icon" />
        </ChatInputBox>
      </ChatRoomContainer>
    </div>
  );
}

export default App;

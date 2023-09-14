import React, { useEffect } from 'react';
import styled from 'styled-components';
import LeftArrowIcon from './assets/left-arrow-icon.svg';
import ListIcon from './assets/list-icon.svg';
import SendIcon from './assets/send-icon.svg';
import init, {return_ten_added} from 'js_rust/js_rust';
import IChat from './components/IChat';
import YouChat from './components/YouChat';
import './App.css';

const ChatRoomTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  background-color: #f0f1f5;

  position: relative;
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
`

const ChatInputBox = styled.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;

  display: flex;
  flex-direction: row;

  padding: 4px 12px;
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
  let wasm_module = null;
  useEffect(() => {
    async function fn() {
      if (!wasm_module) {
        wasm_module = await init();
        console.log(return_ten_added(10));
      }
    };
    fn();
  }, []);
  return (
    <div className="App">
      <div class="chat-room">
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
          <IChat message="테스트용 채팅입니다" />
          <IChat message="테스트용 채팅입니다" />
          <IChat message="테스트용 채팅입니다" />
        </ChatRoomContent>
        <ChatInputBox>
          <ChatInputText>
          </ChatInputText>
          <img src={SendIcon} alt="send-icon" />
        </ChatInputBox>
      </div>
    </div>
  );
}

export default App;

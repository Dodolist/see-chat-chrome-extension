import React, { useEffect } from 'react';
import styled from 'styled-components';

const YouChatContainer = styled.div`
  position: relative;
  max-width: 280px;
  padding: 12px;
  background-color: #f0f0f0;
  border-radius: 16px 16px 16px 4px;
  margin-top: 20px;

  color: #303030;
  font-size: 16px;
  font-weight: 500;

  letter-spacing: -0.5px;

  align-self: flex-start;

  &::before {
    position: absolute;
    bottom: 100%;
    content: ${props => `"${props.name}"`};

    color: #606060;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.5px;
  }
`

const YouChat = ({ name, message }) => {
  return (
    <YouChatContainer name={name}>
      {message}
    </YouChatContainer>
  );
}

export default YouChat;

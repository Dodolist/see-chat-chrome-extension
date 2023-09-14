import React, { useEffect } from 'react';
import styled from 'styled-components';

const IChatContainer = styled.div`
  max-width: 280px;
  padding: 12px;
  background-color: #408cff;
  border-radius: 16px 16px 4px 16px;
  margin-top: 12px;

  color: #fff;
  font-size: 16px;
  font-weight: 500;

  letter-spacing: -0.5px;

  align-self: flex-end;
`

const IChat = ({ message }) => {
  return (
    <IChatContainer>
      {message}
    </IChatContainer>
  );
}

export default IChat;

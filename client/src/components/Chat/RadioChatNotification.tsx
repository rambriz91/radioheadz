import React from 'react';

type RadioChatPopUpProps = {
  text: string;
}

export const RadioChatNotification = ({ text }: RadioChatPopUpProps) => <div className='chat-notification'>{text}</div>;
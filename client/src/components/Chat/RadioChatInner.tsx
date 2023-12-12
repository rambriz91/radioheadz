import React, {useCallback} from 'react';
import {logChatPromiseExecution} from 'stream-chat';
import {MessageInput, MessageList, MessageToSend, useChannelActionContext, Window} from 'stream-chat-react';

import {RadioChatHeader} from './RadioChatHeader';
import {RadioMessage} from './RadioMessage';
import {RadioMessageInput} from './RadioMessageInput';
import {RadioThread} from './RadioThread';

import {useLayoutController} from '../../context/LayoutController';
import {useMessageTimestamp} from "../../context/MessageTimestampController";

import type {StreamChatType} from './types';

const NOTIFICATION_TEXT_FOR_COMMAND: Record<string, string> = {
  '/ban': 'User banned',
  '/flag': 'User flagged',
  '/mute': 'User muted',
  '/unban': 'User unbanned',
  '/unmute': 'User unmuted',
};

const getNotificationText = (messageText?: string): string | null => {
  for (let command of Object.keys(NOTIFICATION_TEXT_FOR_COMMAND)) {
    if (messageText?.startsWith(command))
      return NOTIFICATION_TEXT_FOR_COMMAND[command];
  }
  return null;
}

export const RadioChatInner = () => {
  const { sendMessage } = useChannelActionContext();
  const { publishAppNotification } = useLayoutController();
  const {timestampEnabled, toggleTimestamp} = useMessageTimestamp();

  const overrideSubmitHandler = useCallback((message: MessageToSend<StreamChatType>) => {
    const { text } = message;
    publishAppNotification(getNotificationText(text))
    const sendMessagePromise = sendMessage(message);
    logChatPromiseExecution(sendMessagePromise, 'send message');
  }, [publishAppNotification, sendMessage]);

  return (
    <>
      <Window>
        <RadioChatHeader
          toggleTimestamp={toggleTimestamp}
          timestampEnabled={timestampEnabled}
        />
        <MessageList Message={RadioMessage} />
        <MessageInput
          focus
          grow
          Input={RadioMessageInput}
          overrideSubmitHandler={overrideSubmitHandler}
        />
      </Window>
      <RadioThread />
    </>
  );
};
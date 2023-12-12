import React from 'react';

import type { MouseEventHandler } from 'react';

import type { ThreadHeaderProps } from 'stream-chat-react';
import type { StreamChatType } from './types';

type RadioThreadHeaderProps = Pick<ThreadHeaderProps<StreamChatType>, 'closeThread' | 'thread'>

export const RadioThreadHeader = ({ closeThread, thread }: RadioThreadHeaderProps) => {
  const onCloseThread: MouseEventHandler<HTMLButtonElement> = (event) => {
    const chatPanel = document.querySelector<HTMLElement>('.str-chat__main-panel');
    if (chatPanel) chatPanel.style.display = 'flex';
    closeThread(event);
  };

  const getReplyCount = () => {
    if (!thread?.reply_count) return 0;
    return thread.reply_count;
  };

  return (
    <div className='thread-header'>
      <button className='close-drawer-btn' onClick={onCloseThread}/>
      <h2>{`Thread (${getReplyCount()})`}</h2>
    </div>
  );
};
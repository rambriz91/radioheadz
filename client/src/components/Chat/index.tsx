import React, { useEffect, useState } from 'react';
import { Channel, Chat } from 'stream-chat-react';

import { init, SearchIndex } from 'emoji-mart';
import data from '@emoji-mart/data';

import { ChatUpgrades } from './ChatUpgrades';
import { RadioChatInner } from './RadioChatInner';
import { RadioChatNotification } from './RadioChatNotification';
import { RadioParticipants } from './RadioParticipants';
import { RadioThreadHeader } from './RadioThreadHeader';

import { getColor, getRandomUserRole, participants } from '../../assets/data';
import { useChecklist } from '../../hooks/useChecklistTasks';

import { useConnectUser } from '../../hooks/useConnectUser';
import { useLayoutController } from '../../context/LayoutController';
import type { Channel as ChannelT } from 'stream-chat';
import type { StreamChatType } from './types';
import { MessageTimestampController } from '../../context/MessageTimestampController';

init({ data });

const urlParams = new URLSearchParams(window.location.search);
const apiKey = urlParams.get('apikey') || process.env.REACT_APP_STREAM_KEY;
const userId = urlParams.get('user') || process.env.REACT_APP_USER_ID;
const userToken = urlParams.get('user_token') || process.env.REACT_APP_USER_TOKEN;
const targetOrigin = urlParams.get('target_origin') || process.env.REACT_APP_TARGET_ORIGIN;

const userToConnect = {
  id: userId!,
  color: getColor(),
  userRole: getRandomUserRole(),
};

export const RadioChat = () => {
  const [channel, setChannel] = useState<ChannelT<StreamChatType> | null>(null);
  const { memberListVisible, popUpText, upgradePanelVisible, chatVisible } = useLayoutController();
  const chatClient = useConnectUser<StreamChatType>(apiKey!, userToConnect, userToken);
  useChecklist({ chatClient, targetOrigin });

  useEffect(() => {
    if (!chatClient) return;

    const loadChat = async () => {
      const channel = chatClient.channel('Radio', 'Radio-demo', { name: 'RadioHeads' });
      await channel.watch();
      setChannel(channel);
    };

    loadChat();
  }, [chatClient]);

  if (!chatClient) return null;

  return (
    <section
      className={`sidebar ${memberListVisible} ${chatVisible} ${
        upgradePanelVisible ? 'show-upgrade' : ''
      }`}
    >
      {channel && (
        <div className='chat-container'>
          <Chat client={chatClient}>
            <Channel
              channel={channel}
              ThreadHeader={RadioThreadHeader}
              emojiSearchIndex={SearchIndex}
            >
              <MessageTimestampController>
                <RadioChatInner />
              </MessageTimestampController>
            </Channel>
          </Chat>
          {popUpText && <RadioChatNotification text={popUpText} />}
        </div>
      )}
      <RadioParticipants participants={participants} />
      <ChatUpgrades />
    </section>
  );
};
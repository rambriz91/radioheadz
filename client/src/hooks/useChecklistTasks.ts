import { useEffect } from 'react';

import type { Event, StreamChat } from 'stream-chat';

import type { StreamChatType } from '../components/Chat/types';


const notifyParent = (parent: string) => (message: any) => {
  window.parent.postMessage(message, parent);
};



// We have to keep this task list up-to-date with the website's checklist
const [REACT_TO_MESSAGE, RUN_GIPHY,  DRAG_DROP, START_THREAD, SEND_MESSAGE] = [
  'react-to-message',
  'run-giphy',
  'drag-drop-image',
  'start-thread',
  'send-message',
];

type ChecklistTaskProps = {
  chatClient: StreamChat<StreamChatType> | null;
  targetOrigin?: string;
};

export const useChecklist = (props: ChecklistTaskProps): void => {
  const { chatClient, targetOrigin } = props;

  useEffect(() => {
    if (!targetOrigin) return;
    const notify = notifyParent(targetOrigin);

    const handleNewEvent = (
      props: Event<StreamChatType>,
    ) => {
      const { message, type } = props;

      switch (type) {
        case 'reaction.new':
          notify(REACT_TO_MESSAGE);
          break;
        case 'message.new':
          if (message?.command === 'giphy') {
            notify(RUN_GIPHY);
            break;
          }
          if (message?.attachments?.length) {
            
            if (message.attachments[0].type === 'image') {
              notify(DRAG_DROP);
              break;
            }
          }
          if (message?.parent_id) {
            notify(START_THREAD);
            break;
          }
          notify(SEND_MESSAGE);
          break;
        default:
          break;
      }
    };
    if (chatClient) {
      chatClient.on(handleNewEvent);
    }
    return () => chatClient?.off(handleNewEvent);
  }, [chatClient, targetOrigin]);
};
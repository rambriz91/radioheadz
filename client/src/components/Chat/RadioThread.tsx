import React from 'react';
import { Thread } from 'stream-chat-react';

import { RadioMessage } from './RadioMessage';
import { RadioMessageInput } from './RadioMessageInput';

export const RadioThread = () => {
  return <Thread Message={RadioMessage} Input={RadioMessageInput} />;
};
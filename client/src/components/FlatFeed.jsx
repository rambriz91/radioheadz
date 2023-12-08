import React from 'react';
//you need to install getstream to your local machine to connect (npm i). This  will install the associated node modules as well.
import { FlatFeed } from 'getstream -react';

const FlatFeedComponent = () => {
  return (
    <FlatFeed
      feedGroup="timeline"
      notify
      options={{ limit: 10 }}
      Paginator={(props) => (
        <div>
          <props.LoadMoreButton />
        </div>
      )}
    />
  );
};

export default FlatFeedComponent;

// this just thee basis of the feed component, there is more to add!!!
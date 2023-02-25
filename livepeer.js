import { createReactClient } from '@livepeer/react';
import { studioProvider } from 'livepeer/providers/studio';

const LivePeerClient = createReactClient({
  provider: studioProvider({ apiKey: '26ab1b74-e7c6-4fda-87b7-b57594b05679' }),
});

export default LivePeerClient;

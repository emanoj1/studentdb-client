// LIVE Chat Widget implementation

import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/66ad840c32dca6db2cb97581/1i4asnkq0';
    script.setAttribute('crossorigin', '*');
    const scriptTag = document.getElementsByTagName('script')[0];
    scriptTag.parentNode.insertBefore(script, scriptTag);
  }, []);

  return null;
};

export default LiveChat;

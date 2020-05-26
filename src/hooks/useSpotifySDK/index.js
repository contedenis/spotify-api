// @packages
import { useEffect } from 'react';

// @own
import { scriptGenerator } from './spotifyScript';

function useSpotifySDK() {
  useEffect(() => {
    const scriptLibrary = document.createElement('script');
    scriptLibrary.src = 'https://sdk.scdn.co/spotify-player.js';
    document.body.appendChild(scriptLibrary);

    const token = localStorage.getItem('token');
    const scriptInitSDK = document.createElement('script');
    const newScript = scriptGenerator(JSON.stringify(token));
    scriptInitSDK.appendChild(document.createTextNode(newScript));
    document.body.appendChild(scriptInitSDK);

    return () => {
      document.body.removeChild(scriptLibrary);
      document.body.removeChild(scriptInitSDK);
    };
  }, []);
}

export default useSpotifySDK;

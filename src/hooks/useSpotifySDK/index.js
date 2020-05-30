// @packages
import { useEffect, useState } from 'react';

// @app
import useScript from 'hooks/useScript';

function useSpotifySDK({ token }) {
  const [loaded, error] = useScript('https://sdk.scdn.co/spotify-player.js');
  const [deviceId, setDeviceId] = useState(null);

  useEffect(() => {
    if (loaded && !error) {
      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: 'My Web Player',
          getOAuthToken: (cb) => { cb(token); },
        });

        // Error handling
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });

        // Playback status updates
        player.addListener('player_state_changed', (state) => { console.log(state); });

        // Ready
        player.addListener('ready', ({ device_id }) => {
          setDeviceId(device_id);
          console.log('Ready with Device ID', device_id);
        });

        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });

        // Connect to the player!
        player.connect();
      };
    }
  }, [loaded]);

  return deviceId;
}

export default useSpotifySDK;

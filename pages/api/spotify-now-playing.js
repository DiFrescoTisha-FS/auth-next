import { URLSearchParams } from 'url';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
//   throw new Error('Missing Spotify environment variables');
// }

const BASIC = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token?`;

const getAccessToken = async () => {
  const TOKEN_URL =
    TOKEN_ENDPOINT +
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    });
  const response = await fetch(TOKEN_URL, {
    headers: {
      Authorization: `Basic ${BASIC}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async (_, res) => {
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const track = await response.json();
  if (track.currently_playing_type !== 'track') {
    return res.status(200).json({ isPlaying: false });
  }

  const album = {
    name: track.item.album.name,
    href: track.item.album.external_urls.spotify,
    image: {
      height: track.item.album.images[0].height,
      href: track.item.album.images[0].url,
      width: track.item.album.images[0].width,
    },
  };
  const artists = track.item.artists.map((artist) => ({
    name: artist.name,
    href: artist.external_urls.spotify,
    id: artist.id,
  }));
  const href = track.item.external_urls.spotify;
  const isPlaying = track.is_playing;
  const title = track.item.name;

  return res.status(200).json({
    album,
    artists,
    href,
    isPlaying,
    title,
  });
};

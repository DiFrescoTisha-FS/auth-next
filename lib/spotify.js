// import querystring from 'querystring'

// const client_id = process.env.SPOTIFY_CLIENT_ID;
// const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
// const refresh_token = process.env.REFRESH_TOKEN
// const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
// const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists';

// const getAccessToken = async () => {
//     const response = await fetch(TOKEN_ENDPOINT, {
//       method: 'POST',
//       headers: {
//         Authorization: `Basic ${basic}`,
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: querystring.stringify({
//         grant_type: 'refresh_token',
//         refresh_token,
//       })
//       });
  
//     return response.json();
//   };

//   export const getUsersPlaylists = async () => {
//     const {access_token} = await getAccessToken();
//     return fetch(PLAYLISTS_ENDPOINT, {
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//       },
//     });
//   };

// import SpotifyWebApi from "spotify-web-api-node";

// const scopes = [
//     "user-read-email",
//     "playlist-read-private",
//     "playlist-read-collaborative",
//     "user-read-email",
//     "streaming",
//     "user-read-private",
//     "user-library-read",
//     "user-top-read",
//     "user-read-playback-state",
//     "user-modify-playback-state",
//     "user-read-currently-playing",
//     "user-read-recently-played",
//     "user-follow-read",
// ].join(',');

// const params = {
//     scope: scopes,
// };

// const queryParamString = new URLSearchParams(params);

// const LOGIN_URL = 
//     "https://accounts.spotify.com/authorize?" + queryParamString.toString();

// const spotifyApi = new SpotifyWebApi({
//     clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//     clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
// });

// export default spotifyApi;

// export { LOGIN_URL };
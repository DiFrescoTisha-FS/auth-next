export default async function handler(req, res) {
    const { q } = req.query;
  
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/search?q=${q}&type=album,artist,track`,
        {
          headers: {
            Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
          },
        }
      );
      res.status(200).json(
        data.albums
        .items.concat(data.artists.items, data.tracks.items)
);
} catch (error) {
console.error(error);
res.status(error.response?.status || 500).json({ message: error.message });
}
}
  
//   : {
//   items: data.albums.items,
//   total: data.albums.total,
//   },
//   artists: {
//   items: data.artists.items,
//   total: data.artists.total,
//   },
//   tracks: {
//   items: data.tracks.items,
//   total: data.tracks.total,
//   }
//   );
//   } catch (error) {
//   console.error(error);
//   res.status(500).json({ message: "Something went wrong" });
//   }
//   }

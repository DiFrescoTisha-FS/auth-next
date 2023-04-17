import { getUsersPlaylists } from '../../lib/spotify';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });

  if (!session || !session.token) {
    return res.status(401).send("Unauthorized");
  }

  const {
    token: { accessToken },
  } = session;

  const response = await getUsersPlaylists(accessToken);
  const { items } = await response.json();

  return res.status(200).json({ items });
};

export default handler;

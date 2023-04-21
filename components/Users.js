import axios from "axios";
import useSWR from "swr";
import Image from "next/image";

export default function Users({ count, setCount }) {
  const address = `https://randomuser.me/api/?results=${count}`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);
  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  return (
    <div>
      <div className="container">

      </div>
      <center>
        <div className="btn">
          <button onClick={() => setCount(count + 3)}>Load More Users</button>
        </div>
      </center>
    </div>
  );
}
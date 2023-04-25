const GetAlbums = ({ item }) => (
    <div className="card mt-4 h-80 bg-[#101606]">
      <img className="w-full h-48 object-cover sm:h-64" src={item.images[0]?.url} alt="album" />
      <h3 className="text-center mt-4">{item.name}</h3>
      <p>{item.artists[0].name}</p>
    </div>
  );

  export default GetAlbums;
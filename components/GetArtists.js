const GetArtists = ({ item }) => (
    <div className="card mt-4 h-80 bg-[#101606]">
      <img className="w-full h-48 object-cover sm:h-64" src={item.images[0]?.url} alt="artist" />
      <h3 className="text-center mt-4">{item.name}</h3>
    </div>
  );

  export default GetArtists;
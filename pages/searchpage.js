import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Search() {
  const { results, loading } = useSelector((state) => state.app);
  
  const noResults = Object.keys(results).length === 0 || results.status > 399;
  
  function itemStyles(item, type, index) {
    if (type === "tracks") {
      return { backgroundImage: `url('${item.album.images[0].url}')` }
    }
    if (item.images && item.images.length > 0) {
      return { backgroundImage: `url('${item.images[0].url}')` }
    } else {
      return { backgroundImage: `url('/placeholder.jpeg')` }
    }
  }

  return (
    <div id="search">
      <div className={`no-results ${noResults ? '' : 'hidden'}`}>
        <FontAwesomeIcon icon={faSpotify} />
        <h3>No Results</h3>
        <p>Please type in a search query to get started...</p>
      </div>
      <div className={`results-grid ${noResults ? 'hidden' : ''}`}>
        {Object.keys(results).map((type) => (
          <ul key={type}>
            <li className="type-title">{type} -&gt;</li>
            {results[type].items.map((item, index) => (
              <li
                key={index}
                className={`item ${loading ? 'loading' : ''}`}
                style={itemStyles(item, type, index)}
              >
                {!loading && (
                  <a href={item.external_urls.spotify} target="_blank">
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

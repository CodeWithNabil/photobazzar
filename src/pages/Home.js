
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import CustomPage from './CostumPage';
import Fotter from '../component/Fotter';
const Home = () => {
  const [inputData, setInputData] = useState('');
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const accessKey = 'pYC64BSIyvzjXFXg1Jh3xD3TyNsFO_IVV12S-LWlpTs';

  const searchImage = async () => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;

      if (page === 1) {
        document.getElementById('show-more-button').style.display = 'block';
      }

      const newResults = results.map((result) => ({
        id: result.id,
        url: result.urls.small,
        alt: result.alt_description,
      }));

      setSearchResults((prevResults) => [...prevResults, ...newResults]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setPage(1);
    setSearchResults([]);
    searchImage();
  };

  const handleShowMore = () => {
    searchImage();
  };

  const navigateToCustomPage = (imageId, imageName, imageDescription) => {
    navigate(`/image/${imageId}`, { state: { name: imageName, description: imageDescription } });
  };

  useEffect(() => {
    document.title = 'PhotoBazzar | Get high-quality images and videos.';
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: '50%',
        backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/146.webp")',
        height: '520px',
      }}>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <form className='justify-center items-center h-screen w-3/4 flex' onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search...🔍"
                className='h-16 w-3/4 text-2xl font-bold rounded-xl'
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
              <button className="text-2xl ml-2 flex items-center bg-teal-500 hover:bg-teal-600 text-white font-extrabold py-4 px-5 rounded-xl cursor-pointer" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="px-2 py-8 gap-y-4 gap-x-4 flex flex-wrap justify-center" id="search-results">
        {searchResults.map((result) => (
          <div key={result.id} className="search-result">
            <img
              className='cursor-pointer shadow-xl rounded'
              src={result.url}
              alt={result.alt}
              onClick={() => navigateToCustomPage(result.id, result.alt)}
            />
          </div>
        ))}
      </div>
      <div className="py-8 flex items-center justify-center">
  <button
    id="show-more-button"
    onClick={handleShowMore}
    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-24 rounded mt-4 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
  >
    Show more
  </button>
</div>
<Fotter/>
    </div>
    
  );
};

export default Home;

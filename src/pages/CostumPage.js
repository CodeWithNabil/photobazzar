
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Fotter from '../component/Fotter';

const CustomPage = ({ addToCart }) => {
  const { id } = useParams();
  const location = useLocation();
  const imageAlt = location.state && location.state.alt;
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const accessKey = 'pYC64BSIyvzjXFXg1Jh3xD3TyNsFO_IVV12S-LWlpTs';
      const url = `https://api.unsplash.com/photos/${id}?client_id=${accessKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };

    fetchImage();
  }, [id]);

  // Function to handle image download
  const handleDownload = () => {
    fetch(imageData.urls.full, { mode: 'cors' })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
  
        // Create a temporary link element
        const a = document.createElement('a');
        a.href = url;
        a.download = 'downloaded-image.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
  
        // Cleanup
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error fetching image data:', error);
      });
  };
  useEffect(() => {
    if (imageData) {
      document.title = `PhotoBazzar | ${imageData.alt_description || 'Image Title'}`;
    }
  }, [imageData]);
  return (
    <div>
      <Navbar />
      {imageData ? (
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 mt-8 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded h-96 w-full"
                alt={imageData.alt_description}
                src={imageData.urls.full}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {imageData.alt_description || 'Image Title'}
              </h1>
              <button
                className="ml-4 inline-flex text-gray-100 bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg"
                onClick={handleDownload}
              >
                Download Image
              </button>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading image...</p>
      )}
      <Fotter />
    </div>
  );
};

export default CustomPage;

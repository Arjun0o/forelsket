import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}&ps=${result}&culture=en`
      );
      console.log(data.artObjects);
      setImages(data.artObjects);
      setIsLoading(false);
    }
    fetchData();
  }, [result]);

  return (
    <div className="container mx-auto my-32">
      {isLoading ? (
        <h1 className="text-5xl text-teal-900 text-center mx-auto mt-32">
          Hey, Beautiful!
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

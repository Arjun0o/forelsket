import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
// import Pagination from "./components/Pagination";

import Pagination from "rc-pagination";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}&ps=10&culture=en&p=${page}`
      );
      setImages(data.artObjects);
      setIsLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container mx-auto my-32">
      <ImageSearch />
      {isLoading ? (
        <h1 className="text-5xl text-teal-900 text-center mx-auto mt-32">
          Hey, Beautiful!
        </h1>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4">
            {images.map(image => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
          <Pagination
            defaultCurrent={1}
            current={page}
            pageSize={10}
            total={10000}
            onChange={current => setPage(current)}
            style={{ margin: "100px" }}
          />
        </>
      )}
    </div>
  );
}

export default App;

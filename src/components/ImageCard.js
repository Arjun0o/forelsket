import React from "react";

const ImageCard = ({ image }) => {
  function sortingTitle() {
    let titleToShow;
    const title = image.title.split(" ");
    if (title.length > 0) {
      titleToShow = title.slice(0, 3);
    }
    return titleToShow.join(" ");
  }

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-xl">
      <img
        src={image.webImage.url}
        alt=""
        className="object-cover w-full h-64"
      />
      <div className="px-6 py-4">
        <div className="text-lg mb-2">
          Title : <span className="text-teal-900">{sortingTitle()}</span>
        </div>
        <div className="text-lg mb-2">
          Artist :{" "}
          <span className="text-teal-900">{image.principalOrFirstMaker}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

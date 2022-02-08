import React from 'react';
import UseLocalStorage from '../UseLocalStorage';
import './Bookmark.scss';

function Bookmark({ productList, productDetail }) {
  const [bookmark, setBookmark] = UseLocalStorage(`id$productDetail.id`, false);

  return (
    <div className="bookmark">
      <div className="bookmarkIcon" onClick={() => setBookmark(!bookmark)}>
        {bookmark ? (
          <i className="fas fa-bookmark" />
        ) : (
          <i className="far fa-bookmark" />
        )}
      </div>
    </div>
  );
}

export default Bookmark;

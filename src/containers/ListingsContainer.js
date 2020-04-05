import React, {  useContext } from 'react';
import { ListingContext } from '../contexts/ListingContextProvider';
import { useSocket } from 'use-socketio';
export function ListingsContainer() {
  const { filteredListings, addListing } = useContext(ListingContext);

  
  useSocket('listing', (listing) => addListing(listing));

  const buildLstngEls = (links) => {
    return links.map(function (link, index) {
      return (
        <span key={index}>
          <a key={index} href={`${link}`}>
            {' '}
            {link}
          </a>
          <br></br>
        </span>
      );
    });
  };
  return (
    <div className="overflow-y height-500">
      {buildLstngEls(filteredListings)}
    </div>
  );
}
// onChange={this.onInputChange}

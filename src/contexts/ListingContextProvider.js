
import React, { createContext, useState ,useEffect} from 'react'

export const ListingContext = createContext();

export const ListingContextProvider = ({children}) =>{

  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [listingsCount, setListingsCount] = useState(0);
  const [filteredListingsCount, setFilteredListingsCount] = useState(0);
  const [filterTxt,setFilterTxt] = useState("");

  const filterFunction = (link) => {
    return link.toLowerCase().search(filterTxt) !== -1;
  };

  function addListing(listing){
    setListings([...listings, listing]);
  }

  useEffect(() => {
    setFilteredListings(listings.filter((link) => filterFunction(link)))
  },[filterTxt]);

  useEffect(() => {
    setListingsCount(listings.length)
  },[listings.length]);

  useEffect(() => {
    setFilteredListings(listings.filter((link) => filterFunction(link)))
    setFilteredListingsCount(filteredListings.length)
  },[filteredLilistings.length]);


  return <ListingContext.Provider value={{addListing,listingsCount,filteredListingsCount,filteredListings,setFilterTxt}}>
        {children}, 
  </ListingContext.Provider>
}

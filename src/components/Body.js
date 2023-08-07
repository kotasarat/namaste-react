import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  let promoted = true;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();
    console.log(json);
    setResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Please check your internet connection</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            data-testid="searchInput"
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              let filterSearchData = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filterSearchData);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-1 bg-gray-200 rounded-lg"
            onClick={() => setFilteredResList(resList)}
          >
            Clear
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-amber-200 rounded-lg"
            onClick={() => {
              console.log("Button Clicked");
              let filterResData = resList.filter(
                (res) => res.info.avgRating > 4.3
              );
              console.log(filterResData);
              setFilteredResList(filterResData);
              setSearchText("");
            }}
          >
            Top Rated Restaurants
          </button>
          {/* <div>
            <label>User Name: </label>
            <input
              className="border border-black "
              type="text"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div> */}
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResList.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            {res.info.id % 2 == 0 ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

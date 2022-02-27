import React, { useState, useEffect } from "react";
import "./Home.css"
import {
  FoodsAll,
  SearchFood,
} from "../Store/actions"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Foods from "./Foods.js"
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FoodsAll());
  }, [dispatch]);

  const Search = (title) => {
    title === "" ? dispatch(FoodsAll()) : dispatch(SearchFood(title));
  };

  const foodstate = useSelector((state) => state.FoodsState);
  // console.log(foodstate)
  // const [container, setContainer] = useState([]);
  let container = foodstate

  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [foodsPerPage] = useState(10);

  const indexOfLastPost = currentPage * foodsPerPage;
  const indexOfFirstPost = indexOfLastPost - foodsPerPage;
  const currentPost = container.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);






  return (
    <div className="Background_Home">
      <h1>Osiris Selection</h1>
      <div>
        <SearchBar search={Search} className="Home_search__search" />
      </div>
      <div>
        <Link to="/create">
          <h2>Create</h2>
        </Link>
      </div>
      <div>
        <Foods foodsInfo={currentPost} loading={loading} />
      </div>
      <div>
        <Pagination
          className="Home__pagination__li"
          foodsPerPage={foodsPerPage}
          totalFoods={container.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

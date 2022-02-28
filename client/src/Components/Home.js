import React, { useState, useEffect } from "react";
import "./Home.css"
import {
  FoodsAll,
  SearchFood,
  Filtrated,
} from "../Store/actions"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Foods from "./Foods.js"
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Filtredbuttom from "./Filtredbuttom"


export default function Home() {
  const dispatch = useDispatch();

  const foodstate = useSelector((state) => state.FoodsState);
  const filter = useSelector((state) => state.Filtred);

  // console.log(foodstate)
  // const [container, setContainer] = useState([]);
  const [container, setContainer] = useState([]);

  useEffect(() => {
    dispatch(FoodsAll());
  }, [dispatch]);

  const Search = (title) => {
    title === "" ? dispatch(FoodsAll()) : dispatch(SearchFood(title));
  };

  React.useEffect(() => {
    if (foodstate && filter.length === 0) {
      setContainer(foodstate);
      // alert('algo')
    } else {
      setContainer(filter);
    }
  }, [filter, foodstate]);


  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [foodsPerPage] = useState(10);

  const indexOfLastPost = currentPage * foodsPerPage;
  const indexOfFirstPost = indexOfLastPost - foodsPerPage;
  const currentPost = container.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const Filtred = (arg) => {
    dispatch(Filtrated(arg))
  }





  return (
    <div className="Background_Home">
      <h1>Osiris Selection</h1>
      <div>
        <SearchBar search={Search} className="Home_search__search" />
      </div>
      <div>
        <Filtredbuttom
          Filtred={Filtred}
        />
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

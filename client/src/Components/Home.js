import React, { useState, useEffect } from "react";
import "./Home.css"
import {
  FoodsAll,
  SearchFood,
  Filtrated,
  DietFiltrated,
  GetDiets,

} from "../Store/actions"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Foods from "./Foods.js"
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Filtredbuttom from "./Filtredbuttom"
import Dietbuttom from "./Dietbuttom"


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FoodsAll());
  }, [dispatch]);

  const foodstate = useSelector((state) => state.FoodsState);
  const filter = useSelector((state) => state.Filtred);


  const [container, setContainer] = useState([]);
  // console.log(container)



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
  const [foodsPerPage] = useState(9);

  const indexOfLastPost = currentPage * foodsPerPage; //ej 9
  const indexOfFirstPost = indexOfLastPost - foodsPerPage; //18
  const currentPost = container.slice(indexOfFirstPost, indexOfLastPost); //9 per page per tier


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const Filtred = (arg) => {
    dispatch(Filtrated(arg))
  }
  const FiltratedDiets = (arg) => {
    // console.log("exaaisto");
    // console.log("exist222o");
    dispatch(DietFiltrated(arg));
  };

  const GettingDiets = (arg) => {
    dispatch(GetDiets(arg));
  };

  dispatch(GetDiets());

  return (
    <body className="Home__ALL">
      <div className="Home__Banner">
        <Link to="/" className="Home__GoBack">
          💲pay and go💲
        </Link>
        <Dietbuttom className="Home__FiltratedDiets"
          GettingDiets={GettingDiets}
          FiltratedDiets={FiltratedDiets} />
        <Filtredbuttom
          Filtred={Filtred} />
        <h1 className="Home__title">Osiris Selection</h1>
        <SearchBar search={Search} className="Home_search__search" />
        <Link to="/create" className="Home__Order">
          🍔Custom Order🍕
        </Link>
      </div>



      <div className="Home__Center">
        <div className="Home__Center__Centrated">
          <div className="Home__Center__Food">
            <Foods foodsInfo={currentPost} loading={loading} />
          </div>

        </div>
      </div>



      <div className="Home__buttom">
        <Pagination
          className="Home__pagination__li"
          foodsPerPage={foodsPerPage}
          totalFoods={container.length}
          paginate={paginate}
        />
      </div>
    </body>

  )
};

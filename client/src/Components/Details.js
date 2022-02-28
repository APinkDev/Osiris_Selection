import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Detailed } from "../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Details.css";

const Details = (props) => {

    // console.log("props", props)
  let id = props.match.params.id;
  console.log("id uwu", id)
  const dispatch = useDispatch();
  const detailed = useSelector((state) => state.Details);

  useEffect(() => {
    dispatch(Detailed(id));
  }, [id, dispatch]);

  // let TempArray = []
  console.log("detalles : ", detailed);
  // console.log("la ide detales : ", id)
//   let comidita = [];
//   if (detailed[0]) {
//     comidita = detailed[0];
//   }
  let veganValue = ""
  let vegetarianValue = ""
  let veryPopularValue = ""
  let glutenFreeValue = ""

  if (detailed.vegan === true){
      veganValue = "YES! it's Vegan"
  }else{
      veganValue = "OH GOD! it's not vegan!!!"
  }
  if (detailed.vegetarian === true){
    vegetarianValue = "Full of green thinks!"
}else{
    vegetarianValue = "There is something red on this dish"
}
if (detailed.veryPopular === true){
    veryPopularValue = "The TOP of today"
}else{
    veryPopularValue = "meh"
}
if (detailed.glutenFree === true){
  glutenFreeValue = "Nothing at all"
}else{
  glutenFreeValue = "Your body will be not safe"
}

  if(detailed.summary){
    let string = detailed.summary
    let results = document.getElementById("results")
    results.innerHTML = string;
    results.innerHTML =    results.textContent;
  }
  let DietArray = []
  if (detailed.DietTypes){
    DietArray = detailed.DietTypes && detailed.DietTypes.length? detailed.DietTypes.map((e)=>e.name):detailed.DietTypes
  }else if(detailed.diets){
    DietArray = detailed.diets && detailed.diets.length? detailed.diets.map((e)=>e):detailed.DietTypes
  }

  // let DietArray = detailed.diets && detailed.diets.length? detailed.diets.map((e)=>e):detailed.DietTypes
  // let GenArray = detailed.diets
  console.log(DietArray)
  let dishArray = []
  if (typeof(detailed.dishTypes) === "string" && detailed.dishTypes.includes(",")){
    dishArray=detailed.dishTypes.split(",");
  }
  else if(typeof(detailed.dishTypes) === "string" && !detailed.dishTypes.includes(",")){
    dishArray=[detailed.dishTypes] //platArray=["Action"]
  }

  let cuisinArray = []
  if (typeof(detailed.cuisines) === "string" && detailed.cuisines.includes(",")){
    cuisinArray=detailed.cuisines.split(",");
  }
  else if(typeof(detailed.cuisines) === "string" && !detailed.cuisines.includes(",")){
    cuisinArray=[detailed.cuisines] //platArray=["Action"]
  }
  

  return (
    <body className="Background__Details">
      <div className="Details__left">
        <img
          className="GameImg__img"
          src={detailed.image}
          alt="background"
        ></img>
      </div>

      <div className="Details__right">
        <div className="Name__Details">{detailed.title}</div>

        <div id="results" className="Released__Years"></div>


        <div className="Width">
        💖cuisines: {
            Array.isArray(cuisinArray) && cuisinArray.length ? (
            cuisinArray.map((a) => (
              <li key={a}>
                <span>{a} </span>
              </li>
            ))
            ): (
            detailed.cuisines&&detailed.cuisines.map((a)=>(
              <li key={a}>
                <span>{a}</span>
                </li>
            ))
          )}
        </div>
        <div className="Rating">
        💖dishTypes: {
            Array.isArray(dishArray) && dishArray.length ? (
            dishArray.map((a) => (
              <li key={a}>
                <span>{a} </span>
              </li>
            ))
            ): (
            detailed.dishTypes&&detailed.dishTypes.map((a)=>(
              <li key={a}>
                <span>{a}</span>
                </li>
            ))
          )}
        </div>
        <div className="temps__Details">
        💖diets: {Array.isArray(DietArray) ? (
            DietArray.map((a) => (
              <li key={a}>
                <span>{a} </span>
              </li>
            ))
          ) : (
            <span>No genres yet</span>
          )}
        </div>
        <div className="temps__Details">
        💖readyInMinutes: {detailed.readyInMinutes}
        </div>
        <div className="temps__Details">
        💖pricePerServing: {detailed.pricePerServing}
        </div>
        <div className="temps__Details">
        💖spoonacularScore: {detailed.spoonacularScore}
        </div>
        <div className="temps__Details">
        💖healthScore: {detailed.healthScore}
        </div>
        <div className="temps__Details">
        💖is this vegetarian? {vegetarianValue}
        </div>
        <div className="temps__Details">
        💖is this Popular? {veryPopularValue}
        </div>
        <div className="temps__Details">
        💖is this vegan? {veganValue}
        </div>
        <div className="temps__Details">
        💖is this glutenFree? {glutenFreeValue}
        </div>
        
      </div>
      <div className="">
        <Link to="/home" className="Details__rightdown">
        <p className="Details__rightdown__text"> I change my mind 👉👈 </p>
        </Link>
      </div>
    </body>
  );
};

export default Details;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetDiets, GetCuisines, GetDishTypes } from "../Store/actions.js";
import { Post } from "../Store/actions.js";
import "./Create.css";

const Validate = (inputs) => {
  let error = {};
  if (!inputs.title) {
    error.title = "title required"
  }
  else if (!inputs.image) {
    error.image = "image required"
  }
  else if (!inputs.dishTypes) {
    error.dishTypes = "dishTypes required"
  }
  else if (!inputs.cuisines) {
    error.cuisines = "cuisines required"
  }
  else if (!inputs.summary) {
    error.summary = "summary required"
  }
  else if (!inputs.readyInMinutes) {
    error.readyInMinutes = "readyInMinutes required"
  }
  else if (!inputs.pricePerServing) {
    error.pricePerServing = "pricePerServing required"
  }
  else if (!inputs.spoonacularScore) {
    error.spoonacularScore = "spoonacularScore required"
  }
  else if (!inputs.healthScore) {
    error.healthScore = "healthScore required"
  }
  else if (inputs.veryPopular === undefined) {
    error.veryPopular = "veryPopular required"
  }
  else if (inputs.vegetarian === undefined) {
    error.vegetarian = "vegetarian required"
  }
  else if (inputs.vegan === undefined) {
    error.vegan = "vegan required"
  }
  else if (inputs.glutenFree === undefined) {
    error.glutenFree = "glutenFree required"
  }
  else if (!inputs.name) { //son las dietas
    error.name = "diets required"
  }
  else if (!inputs.analyzedInstructions) {
    error.name = "analyzedInstructions required"
  }
  return error
}

export default function Create() {
  const dispatch = useDispatch();
  const dietitas = useSelector((state) => state.AllDiets);
  const cuisinitos = useSelector((state) => state.Allcuisines);
  const tipicitos = useSelector((state) => state.Alldishtypes);
  // console.log("dietitas:",dietitas)
  // console.log("cuisinitos:",cuisinitos)
  // console.log("tipiquitos:", tipicitos)



  React.useEffect(() => {
    dispatch(GetDiets());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(GetCuisines());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(GetDishTypes());
  }, [dispatch]);

  const [inputs, setInputs] = useState({
    title: "",
    image: "",
    dishTypes: [],
    cuisines: [],
    summary: "",
    readyInMinutes: "",
    pricePerServing: "",
    spoonacularScore: "",
    healthScore: "",
    veryPopular: undefined,
    vegetarian: undefined,
    vegan: undefined,
    glutenFree: undefined,
    name: [], //name son las dietas
    analyzedInstructions: [],
  })



  const PushAnalized = (e) => {
    let FinalAnalized = document.getElementById('analyzedInstructions')
    setInputs({ ...inputs, [FinalAnalized.name]: inputs.analyzedInstructions.concat(FinalAnalized.value) })
    FinalAnalized.value = ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let error = Object.keys(Validate(inputs))
    if (error.length !== 0) {

      alert('Please fill the options~')
    }
    else {
      console.log("resultado final: ", inputs)

      alert("Well done! uwu")
      dispatch(Post(inputs))
      setInputs({
        title: "",
        image: "",
        dishTypes: [],
        cuisines: [],
        summary: "",
        readyInMinutes: "",
        pricePerServing: "",
        spoonacularScore: "",
        healthScore: "",
        veryPopular: undefined,
        vegetarian: undefined,
        vegan: undefined,
        glutenFree: undefined,
        name: [], //name son las dietas
        analyzedInstructions: [],
      })
    }
  }
  // console.log("popular", inputs.veryPopular)
  return (
    <div className="Create">
      <h1 className="Create__Title">Create a food</h1>
      <Link to="/home">
        <button className="Create__HomeButtom">I change my mind</button>
      </Link>

      <div className="Create__Container">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="Create__Capa__1">
              <input
                className="Create__title"
                type="text"
                name="title"
                placeholder="Title of the dish..."
                value={inputs.title}
                onChange={(evt) => setInputs({ ...inputs, [evt.target.name]: evt.target.value })}
              ></input>
              <input
                className="Create__image"
                type="url"
                name="image"
                placeholder="image of the dish..."
                value={inputs.image}
                onChange={(evt) => setInputs({ ...inputs, [evt.target.name]: evt.target.value })}
              ></input>
            </div>


            <div className="Create__Capa__2">
              <select
                className="Create__diets"
                type="select-multiple"
                name="name"
                placeholder="name of the dish..."
                value={inputs.name}
                onChange={(evt) =>
                  setInputs({ ...inputs, [evt.target.name]: inputs.name.concat(evt.target.value) })
                }
              >{dietitas.map((e, index) => (
                <option key={index} value={e.name}>
                  {e.name}
                </option>
              ))}
              </select>

              <select
                className="Create__dishTypes"
                type="select-multiple"
                name="dishTypes"
                placeholder="dishTypes of the dish..."
                value={inputs.dishTypes}
                onChange={(evt) =>
                  setInputs({ ...inputs, [evt.target.name]: inputs.dishTypes.concat(evt.target.value) })
                }
              >{tipicitos.map((e, index) => (
                <option key={index} value={e}>
                  {e}
                </option>
              ))}
              </select>

              <select
                className="Create__cuisines"
                type="select-multiple"
                name="cuisines"
                placeholder="cuisines of the dish..."
                value={inputs.cuisines}
                onChange={(evt) =>
                  setInputs({ ...inputs, [evt.target.name]: inputs.cuisines.concat(evt.target.value) })
                }
              >{cuisinitos.map((e, index) => (
                <option key={index} value={e}>
                  {e}
                </option>
              ))}
              </select>
            </div>


            <div className="Create__Capa__3">
              <input
                className="Create__readyInMinutes"
                type="number"
                name="readyInMinutes"
                placeholder="Ready In:"
                value={inputs.readyInMinutes}
                onChange={(evt) => setInputs({ ...inputs, [evt.target.name]: evt.target.value })}
              ></input>

              <input
                className="Create__pricePerServing"
                type="number"
                name="pricePerServing"
                placeholder="Price:"
                value={inputs.pricePerServing}
                onChange={(evt) => setInputs({ ...inputs, [evt.target.name]: evt.target.value })}
              ></input>
              <input
                className="Create__spoonacularScore"
                type="number"
                name="spoonacularScore"
                placeholder="Spoon Score:"
                value={inputs.spoonacularScore}
                onChange={(evt) => setInputs({ ...inputs, [evt.target.name]: evt.target.value })}
              ></input>
              <input
                className="Create__healthScore"
                type="number"
                name="healthScore"
                placeholder="Health Score:"
                value={inputs.healthScore}
                onChange={(evt) => setInputs({ ...inputs, [evt.target.name]: evt.target.value })}
              ></input>

            </div>


            <div className="Create__Capa__4">
              <select
                className="Create__Popular"
                name="veryPopular"
                type="select-multiple"
                multiple={false}
                placeholder="is this Popular?"
                value={inputs.veryPopular}
                onChange={evt =>
                  setInputs({ ...inputs, [evt.target.name]: evt.target.value })
                }
              >
                <option value={undefined}>Popular?</option>
                <option value={true}>Yes!</option>
                <option value={false}>Nope</option>
              </select>
              <select
                className="Create__Vegetarian"
                name="vegetarian"
                type="select-multiple"
                defaultValue={"Vegetarian"}
                multiple={false}
                placeholder="is this Vegetarian?"
                value={inputs.vegetarian}
                onChange={evt =>
                  setInputs({ ...inputs, [evt.target.name]: evt.target.value })
                }
              >
                <option value={undefined}>Vegetarian?</option>
                <option value={true}>Yes!</option>
                <option value={false}>Nope</option>
              </select>
              <select
                className="Create__Vegan"
                name="vegan"
                type="select-multiple"
                multiple={false}
                placeholder="is this Vegan?"
                value={inputs.vegan}
                onChange={evt =>
                  setInputs({ ...inputs, [evt.target.name]: evt.target.value })
                }
              >
                <option value={undefined}>Vegan?</option>
                <option value={true}>Yes!</option>
                <option value={false}>Nope</option>
              </select>
              <select
                className="Create__Gluten"
                name="glutenFree"
                type="select-multiple"
                multiple={false}
                placeholder="is this GlutenFree?"
                value={inputs.glutenFree}
                onChange={evt =>
                  setInputs({ ...inputs, [evt.target.name]: evt.target.value })
                }
              >
                <option value={undefined}>GlutenFree?</option>
                <option value={true}>Yes!</option>
                <option value={false}>Nope</option>
              </select>

            </div>


            <div className="Create__Capa__5">

              <textarea
                className="Create__summary"
                type="textarea"
                name="summary"
                placeholder="summary of the dish..."
                value={inputs.summary}
                onChange={(evt) => setInputs({ ...inputs, [evt.target.name]: evt.target.value })}
              ></textarea>

              <textarea
                className="Create__analyzedInstructions"
                type="textarea"
                placeholder="type the step by step, then select the arrow and type the next step"
                id="analyzedInstructions"
                name="analyzedInstructions"></textarea>
              <button
                className="Create__analyzedInstructions__button"
                type="button"
                // value="button"
                onClick={PushAnalized}>???</button>




              <button type="submit" className="Create__send">Order Now!</button>
            </div>




          </div>
        </form>
      </div>

    </div>
  )

}//a??adir un input y concatenarlo apra que se sume como se hace en quisines, para que cada que se le de al boton, el estado anterior se actualize con ese elemento nuevo
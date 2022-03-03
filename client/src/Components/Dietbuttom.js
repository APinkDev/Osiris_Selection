import React from "react";
import { useSelector } from "react-redux";
import "./Dietbuttom.css";

export default function Dietbuttom({ FiltratedDiets, GettingDiets }) {
    const foodz = useSelector((state) => state.AllDiets);
    // console.log("foodz", foodz)

    const [buton, setButon] = React.useState([]);

    const handleOnSubmit = (evt) => {
        evt.preventDefault()

        // console.log(buton)
        setTimeout(() => {
            FiltratedDiets(buton);
            setButon([]);
        }, 1000)
    };



    return (
        <div className="Filtred__div">
            <form onSubmit={handleOnSubmit}>
                {/* <select onChange={handleOnClick} className="Filtred__button">
                    {foodz.map((e, index) => (
                        <option key={index} value={e.name} >
                            {e.name}
                        </option>
                    ))}
                </select> */}
                <select
                    className="Filtred__button"
                    onChange={(evt) =>
                        setButon((newDiet) => [...newDiet, evt.target.value])

                    }
                >{foodz.map((e, index) => (
                    <option key={index} value={e.name} >
                        {e.name}
                    </option>
                ))}
                </select>
                <button className="FIltred__Filter" type="submit">Apply Filters</button>
            </form>
        </div>
    );
}

import React from "react";
import { Link } from "react-router-dom";


export default function Dog({ id, title, image, diets, spoonacularScore }) {
    // console.log("dietas: ", diets)
    return (
        <div>
            <Link to={`details/${id}`}>
                <div
                    className="Dog__All"
                    style={{ backgroundImage: `url('${image}')` }}>
                    <div className="Dog__ContainerImg">
                        <div className="Dog__info">
                            {title},
                            Score: {spoonacularScore}
                        </div>
                        <div className="Videogame__Genres">
                            {Array.isArray(diets) ? (
                                diets.map((a) => (
                                    <li key={a}>
                                        <span>{a} </span>
                                    </li>
                                ))
                            ) : (
                                <span>No genres yet</span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

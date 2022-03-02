import React from "react";
import { Link } from "react-router-dom";
import "./Food.css"


export default function Dog({ id, title, image, diets, healthScore }) {
    // console.log("dietas: ", diets)
    return (
        <div>
            <Link to={`details/${id}`}>
                <div
                    className="Videogame__All"
                    style={{ backgroundImage: `url('${image}')` }}>
                    <div className="Dog__ContainerImg">
                        <div className="Videogame__Name">
                            {title},
                            Score: {healthScore}❤
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

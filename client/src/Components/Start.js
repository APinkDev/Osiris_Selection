import React from "react";
import { Link } from "react-router-dom";
import "./Start.css";
import Osiris from "../rsc/osiris.png"

const Start = () => {
    return (
        <body className="start__complete">
            <div className="start__left">
                <div className="start__left__up">
                    <Link className="Link" to="/Home">
                        <h1 className="start__left__Title" >Osiris Selection</h1>
                    </Link>
                </div>
                <div className="start__left__down">
                    <p className="start__left__Text">
                        The best food of the Ancient Egypt!<br></br>
                        come here and try our cultural dishes<br></br>
                        if they are not of your taste we also have...<br></br>
                        FOOD FROM THE FUTURE!<br></br>
                        me, the God of Egypt, can bring you some delicious food from <br></br>
                        distant lands and distant timelines~<br></br>
                        We serve under the motto "the customer is always right"<br></br>
                    </p>
                </div>
            
            </div>
            <div className="start__right">
                <Link to="/Home">
                    <img className="start__right__img" src={Osiris} alt="osirisIcon"></img>
                </Link>
            </div>

        </body>

    );
};


export default Start;
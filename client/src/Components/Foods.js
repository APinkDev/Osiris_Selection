import React from "react";
import Food from "./Food"

export default function Foods({ foodsInfo, loading }) {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    // console.log("info:", foodsInfo)
    return (
        <div className="foods__info" >
            {foodsInfo && foodsInfo.map((e, index) => (
                <Food
                    Key={index}
                    id={e.id}
                    title={e.title}
                    image={e.image}
                    diets={e.diets}
                    spoonacularScore={e.spoonacularScore}
                />
            ))}

        </div>
    )
}
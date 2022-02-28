import React from "react";
import "./Filtredbuttom.css";
export default function Filtredbuttom({ Filtred }) {

  return (
    <div className="AZ__div">
      <select
      className="AZ__button"
        defaultValue={"DEFAULT"}
        onChange={(e) => Filtred(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          Sort by:
        </option>
        <option value="">all</option>
        <option value="AZ">AZ</option>
        <option value="ZA">ZA</option>
        <option value="High Health Score">High Health Score</option>
        <option value="Low Health Score">Low Health Score</option>
      </select>
    </div>
  );
}

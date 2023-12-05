import React, { useState } from "react";

export const Dropdown = ({ id, data, optionName, value, def }) => {
  const [optionsState, setOptionsState] = useState("");
  return (
    <>
      <select
        className="form-dropdown col-11"
        id={id}
        value={optionsState}
        onChange={(e) => setOptionsState(e.target.value)}
      >
        <option value={def} className="d-none">
          {def}
        </option>
        {data.map((optionName) => (
          <option
            key={id}
            value={optionName}
            selected={optionsState === optionName}
          >
            {optionName}
          </option>
        ))}
      </select>
    </>
  );
};

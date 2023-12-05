import React from "react";

export const Input = ({
  className,
  placeholder,
  inputValue,
  id,
  ref,
  handleInputChange,
}) => {
  return (
    <>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        ref={ref}
        id={id}
      />
    </>
  );
};

import { useState } from "react";

export const AddCategory2 = ({ onNewCategory }) => {
  // console.log("data ccama", onNewCategory);
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
    // console.log(event);
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};

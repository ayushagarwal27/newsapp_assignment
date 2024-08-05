import React from "react";
import { FormContainer, Input, SearchButton } from "./styles.js";

const QueryInput = ({ onInputChange, onSubmit, searchQuery }) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      <Input
        type={"text"}
        placeholder={"Query..."}
        onChange={onInputChange}
        value={searchQuery}
      />
      <SearchButton type={"submit"}>Search</SearchButton>
    </FormContainer>
  );
};

export default QueryInput;

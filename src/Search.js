import React from "react";
import styled from "styled-components";

const StyledSearchContainer = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  background-color: #dcdcdc;
  padding: 1rem;
  color: grey;
  border: none;
  width: 100%;
  margin-top: 5px;
`;

function Search(props) {
  const { search, handleSearch } = props;
  return (
    <StyledSearchContainer>
      <StyledInput
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        value={search}
      />
    </StyledSearchContainer>
  );
}

export default Search;

import React from "react";
import Karakter from "./Karakter";
import styled from "styled-components";
const StyledGrayText = styled.p`
  color: grey;
  font-size: 0.8rem;
`;
const PagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;
const StyledPage = styled.button`
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 50%;
`;

function Main(props) {
  const { data, search, movies, handlePage, page } = props;
  const activePage = {
    backgroundColor: "black",
    color: "white",
  };
  const pagesJsx = [];
  for (let i = 1; i < 10; i++) {
    pagesJsx.push(i);
  }
  return (
    <div>
      <StyledGrayText>Star Wars Major Characters List</StyledGrayText>
      {data
        .filter((karakter) => {
          if (search == "") {
            return karakter;
          } else if (
            karakter.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return karakter;
          }
        })
        .map((karakter) => (
          <Karakter key={karakter.name} karakter={karakter} movies={movies} />
        ))}
      <PagesContainer>
        {pagesJsx.map((page) => (
          <StyledPage
            style={props.page == page ? activePage : {}}
            onClick={() => handlePage(page)}
          >
            {page}
          </StyledPage>
        ))}
      </PagesContainer>
    </div>
  );
}

export default Main;

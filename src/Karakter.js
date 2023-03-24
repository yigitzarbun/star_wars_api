import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "./Movie";

const StyledKarakterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  border-bottom: 0.1rem solid gray;
`;
const StyledTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledArrow = styled.img`
  width: 1rem;
  height: 1rem;
`;

const StyledGrayText = styled.p`
  color: grey;
  font-size: 0.8rem;
`;
function Karakter(props) {
  const { karakter, movies } = props;
  const [detailed, setDetailed] = useState(false);
  const handleDetailed = () => {
    setDetailed(!detailed);
  };
  const characterMovies = [];
  for (let i = 0; i < movies.length; i++) {
    for (let k = 0; k < karakter.films.length; k++) {
      if (movies[i]["url"] == karakter.films[k]) {
        characterMovies.push(movies[i]);
      }
    }
  }
  return (
    <StyledKarakterContainer>
      <StyledTitleRow onClick={handleDetailed}>
        <h2>{karakter.name}</h2>
        <StyledArrow
          src={detailed ? "/images/up-arrow.png" : "/images/down-arrow.png"}
          alt="open-close"
        />
      </StyledTitleRow>
      {detailed && (
        <div>
          <p>Gender: {karakter.gender}</p>
          <p>Height: {karakter.height}</p>
          <p>Mass: {karakter.mass}</p>
          <p>Birth Year: {karakter.birth_year}</p>
          <p>Eye Color: {karakter.eye_color}</p>
          <p>Hair Color: {karakter.hair_color}</p>
          <p>Skin Color: {karakter.skin_color}</p>
          <StyledGrayText>
            Appears in {karakter.films.length} films
          </StyledGrayText>
          {characterMovies.map((movie) => (
            <Movie key={movie.title} movie={movie} />
          ))}
        </div>
      )}
    </StyledKarakterContainer>
  );
}

export default Karakter;

import React, { useState } from "react";
import styled from "styled-components";

const StyledMovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
function Movie(props) {
  const { movie } = props;
  const [detailed, setDetailed] = useState(false);
  const handleDetailed = () => {
    setDetailed(!detailed);
  };
  return (
    <StyledMovieContainer>
      <StyledTitleRow onClick={handleDetailed}>
        <p>{movie.title}</p>
        <StyledArrow
          src={detailed ? "/images/up-arrow.png" : "/images/down-arrow.png"}
          alt="open-close"
        />
      </StyledTitleRow>
      {detailed && (
        <div>
          <p>{movie.opening_crawl} </p>
          <p>Directed by: {movie.director} </p>
          <p>Produced by: {movie.producer} </p>
          <p>Release date: {movie.release_date} </p>
        </div>
      )}
    </StyledMovieContainer>
  );
}

export default Movie;

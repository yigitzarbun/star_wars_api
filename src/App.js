import "./App.css";
import Search from "./Search";
import Main from "./Main";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledAppContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const handlePage = (value) => {
    setPage(value);
  };
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));

    axios
      .get("https://swapi.dev/api/films/")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [page]);
  return (
    <StyledAppContainer>
      <header>
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </header>
      <main>
        <Main
          search={search}
          data={data}
          movies={movies}
          handlePage={handlePage}
          page={page}
        />
      </main>
    </StyledAppContainer>
  );
}

export default App;

import "./styles.css";
import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
export default function App() {
  const [searchResult, setSearchResult] = useState({ result: [], total: 0 });
  const [loader, setLoader] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  function callApi(searchQuery) {
    console.log(searchQuery);
    setLoader(true);
    fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult({ result: res.products, total: res.total });
        setLoader(false);
      });
  }

  const debouncedFn = useDebounce(callApi, []);

  return (
    <div className="">
      <h1 className="title"> AUTOCOMPLETE </h1>
      <div className="main">
        <input
          onBlur={() => setListOpen(false)}
          onFocus={() => setListOpen(true)}
          className="input"
          onChange={(e) => {
            debouncedFn(e.target.value);
          }}
          type="text"
        />
        {loader ? (
          <p>Loading...</p>
        ) : (
          listOpen && (
            <ol className="ol">
              {searchResult.result.map((el) => (
                <li key={el.id} className="list">
                  {el.title}
                </li>
              ))}
            </ol>
          )
        )}
      </div>
    </div>
  );
}


// css file
/**
.App {
  font-family: sans-serif;
  text-align: center;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}

.input {
  width: 100%;
  padding: 0;
  margin: 0;
}

.title {
  text-align: center;
}

.ol {
  border: 1px solid;
  max-height: 200px;
  overflow-y: scroll;
  width: 100%;
  margin: 0;
  padding: 0;
}

.list:hover {
  background-color: beige;
}
 */
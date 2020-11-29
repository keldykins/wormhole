import { useState, useEffect } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import API from "./utils/API";

import Header from "./components/Header";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    const handle = setTimeout(async () => {
      console.log(searchTerm);
      const res = await API.searchForBook(searchTerm);
      console.log(res);
      setSearchResults(() =>
        res.data.items.map(
          ({
            volumeInfo: {
              title,
              description,
              authors,
              imageLinks: { thumbnail: image },
              infoLink: link,
            },
          }) => ({
            title,
            description,
            authors,
            image,
            link,
          })
        )
      );
    }, 500);
    return () => clearTimeout(handle);
  }, [searchTerm]);

  return (
    <>
      <Header>
        <NavLink className="nav-link" to="/" exact>
          Search
        </NavLink>
        <NavLink className="nav-link" to="/saved" exact>
          Saved
        </NavLink>
      </Header>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            Search
            <div className="input-group">
              <input
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {searchResults.map(({ title, authors, description, image }, i) => (
              <div key={i}>
                <h3>{title}</h3>
                <h4>{authors}</h4>
                <p>{description}</p>
                <img src={image} />
              </div>
            ))}
          </Route>
          <Route path="/saved" exact>
            Saved
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

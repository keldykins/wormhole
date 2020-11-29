import React from "react";

function Header({ children }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <a className="navbar-brand" href="/">
          React Reading List
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-content"
          aria-controls="navbar-content"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-content">
          <ul className="navbar-nav ml-auto">
            {(Array.isArray(children) ? children : [children]).map(
              (child, i) => (
                <li key={i} className="nav-item">
                  {child}
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import * as React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../Router";

const Index = () => {
  return (
    <nav style={{ margin: 20, padding: 20 }}>
      <p>list of pages :</p>
      <ul>
        {Object.values(ROUTES).map(({ path, key }) => (
          <li key={key}>
            <Link to={path}>{key}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Index;

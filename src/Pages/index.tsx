import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <nav style={{ margin: 20, padding: 20 }}>
      <p>list of pages :</p>
      <ul>
        <li>
          <Link to="/several-useState">several-useState</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Index;

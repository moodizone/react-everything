import * as React from "react";
import { Link } from "react-router-dom";

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ margin: 20, padding: 20 }}>
      <div>
        <Link to="/">{"back to HOME"}</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

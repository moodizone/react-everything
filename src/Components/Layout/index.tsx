import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div style={{ margin: 20, padding: 20 }}>
        <a href="/">{"back to HOME"}</a>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

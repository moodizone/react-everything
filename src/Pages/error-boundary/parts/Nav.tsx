import React from "react";

import styles from "../styls.module.scss";
import ErrorBoundary from "../ErrorBoundary";

const Content: React.FC<{ count: number }> = ({ count }) => {
  if (count % 2 === 1) throw new Error("<Nav /> has been broken successfully");

  return (
    <div>
      <div>{"Nav"}</div>
    </div>
  );
};

const Nav = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div style={{ border: "1px dashed #dfdfdf" }}>
      <div style={{ padding: "8px 0 0 8px" }}>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          {count % 2 ? "reset" : "error"}
        </button>
      </div>{" "}
      <div className={styles.nav}>
        <ErrorBoundary key={count}>
          <Content count={count} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Nav;

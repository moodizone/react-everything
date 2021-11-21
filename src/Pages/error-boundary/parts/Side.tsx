import * as React from "react";
import styles from "../styls.module.scss";
import ErrorBoundary from "../ErrorBoundary";

const Content: React.FC<{ count: number }> = ({ count }) => {
  const data = React.useMemo(() => [{ count: 1 }], []);

  React.useEffect(() => {
    try {
      if (count % 2) {
        console.log("Side.tsx -> data[count].count : ", data[count].count);
      }
    } catch (e) {
      throw e;
    }
  }, [count, data]);

  return (
    <div>
      <div>{"Nav"}</div>
    </div>
  );
};

const Side = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div style={{ border: "1px dashed #dfdfdf" }}>
      <div style={{ padding: "8px 0 0 8px" }}>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          {count % 2 ? "reset" : "error"}
        </button>
      </div>
      <div className={styles.side}>
        <ErrorBoundary key={count}>
          <Content count={count} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Side;

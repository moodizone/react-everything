import React from "react";

import styles from "./styls.module.scss";
import Side from "./parts/Side";
import Nav from "./parts/Nav";
import Layer1 from "./parts/Layer1";
import Layer2 from "./parts/Layer2";

const Content = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.main}>
        <Side />
        <Layer1>
          <Layer2 />
        </Layer1>
      </div>
    </div>
  );
};
export default Content;

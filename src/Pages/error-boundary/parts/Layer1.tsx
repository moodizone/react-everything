import React from 'react';
import styles from "../styls.module.scss";

const Layer1:React.FC = ({children}) => {
  return (
    <div className={styles.layers}>
      <div className={styles.layer1}>
        <div>layer1</div>
        <div>
          <button>Error</button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layer1;

import React, { useRef } from "react";
import Layout from "../../Components/Layout";

const SeveralUseState = () => {
  const lazyInitializer = () => {
    lazyInitializerCount.current++;
    return 0;
  };
  const updateCount = useRef<number>(0);
  const mountCount = useRef<number>(0);
  const lazyInitializerCount = useRef<number>(0);
  const [state1, setState1] = React.useState<number>(lazyInitializer);
  const [state2, setState2] = React.useState<string>("0");

  React.useEffect(() => {
    updateCount.current++;
    console.log('inside update effect');
  });
  React.useLayoutEffect(() => {
    mountCount.current++;
    console.log('inside mount effect');
  }, []);

  return (
    <Layout>
      <div style={{ margin: 20, padding: 20 }}>
        <p>{`lazyInitializer counts : ${lazyInitializerCount.current}`}</p>
        <p>{`mount counts : ${mountCount.current}`}</p>
        <p>{`update counts : ${updateCount.current}`}</p>
        <p>{`state1 : ${state1}`}</p>
        <p>{`state1 : ${state2}`}</p>
        <button
          onClick={() => {
            setState1((prevState) => prevState + 1);
            setState2((prevState) => String(+prevState + 1));
          }}
        >
          {"Force Render"}
        </button>
      </div>
    </Layout>
  );
};

export default SeveralUseState;

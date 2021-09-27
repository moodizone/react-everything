import React, { useRef } from "react";
import Layout from "../../Components/Layout";

const SeveralUseState = () => {
  const numberOfRendered = useRef<number>(0);
  const [state1, setState1] = React.useState<number>(0);
  const [state2, setState2] = React.useState<string>("0");
  React.useEffect(() => {
    numberOfRendered.current++;
  });
  return (
    <Layout>
      <div style={{ margin: 20, padding: 20 }}>
        <p>{`render counts : ${numberOfRendered.current}`}</p>
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

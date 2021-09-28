import React from "react";
import { fakeAPI, ResponseType, Mode } from "./fakeEndPoint";

class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error: any) {
    return { error };
  }

  render() {
    console.log("index.tsx -> this.state : ", this.state);
    if (this.state.error) {
      // @ts-ignore
      return <pre>{JSON.stringify(this.state.error?.message)}</pre>;
    }
    return this.props.children;
  }
}

const Content = () => {
  const type: Mode[] = ["resolve", "reject", "throw error"];
  const dummyData = [{ count: 1 }];
  const [state, setState] = React.useState<ResponseType>(null);
  const [fetchAgain, setFetchAgain] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number>(0);

  const fetchData = () => {
    setLoading(true);
    setState(null);
    fakeAPI(type[fetchAgain % type.length])
      .then((res) => setState(res))
      .catch((err) => setState(err))
      .finally(() => setLoading(false));
  };

  React.useEffect(() => {
    fetchData();
  }, [fetchAgain]);

  return (
    <div>
      <ul>
        <li>
          <div>
            <p>{`Fetch Error : (${type[fetchAgain % type.length]})`}</p>
            {loading ? <p>{"loading"}</p> : <pre>{JSON.stringify(state)}</pre>}
            <button
              onClick={() =>
                setFetchAgain((prevState) => (prevState + 1) % type.length)
              }
              disabled={loading}
            >
              {"Fetch Again"}
            </button>
          </div>
        </li>
        <li>
          <p>{"out of range index"}</p>
          <p>{`index : ${index}`}</p>
          <p>{`value : ${dummyData[index].count}`}</p>
          <button onClick={() => setIndex(100)}>{"index = 100"}</button>
        </li>
      </ul>
    </div>
  );
};

const MyBoundary = () => {
  return (
    <ErrorBoundary>
      <Content />
    </ErrorBoundary>
  );
};

export default MyBoundary;

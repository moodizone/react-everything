import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error: any) {
    return { error };
  }
  renderError = (e: any) => {
    if (typeof e === "string") return <p>{e}</p>;
    else if ("message" in e) return <p>{e.message}</p>;
    else return <p>{JSON.stringify(e)}</p>;
  };

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "red",
            padding: 12,
          }}
        >
          <p>{"Error boundary mounted !!!"}</p>
          {this.renderError(this.state.error)}
        </div>
      );
    }
    return this.props.children;
  }
}

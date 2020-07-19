import React, { Component } from "react";
import config from "../config.json";
import { log } from "./log";

log("test esbuild");

export default class App extends Component<
  {
    children?: React.ReactElement;
  },
  {
    title: string;
  }
> {
  static test = 5;
  state = { title: config?.title };

  render() {
    const title: string = this.state.title;
    var x = title ?? "t";

    if (!!0) {
      return;
    }

    return (
      <div>
        <h1>{title}</h1>
        {this.props.children}
      </div>
    );
  }
}

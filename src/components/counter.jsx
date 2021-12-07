import React, { Component } from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={this.props.onIncrement}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    let { count } = this.props;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

import React from "react";

class CounterComponent extends React.Component {
  state = {
    count: 0
  };

  /*
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  handleIncrement = () => {
    //console.log("Button clicked!", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getCount() {
    const { count } = this.state;
    //return count === 0 ? "Zero" : count;
    return !count ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += !this.state.count ? "warning" : "primary";
    return classes;
  }
}

export default CounterComponent;

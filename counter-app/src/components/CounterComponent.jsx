import React from "react";

class CounterComponent extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(aTag => (
            <li key={aTag}>{aTag}</li>
          ))}
        </ul>
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

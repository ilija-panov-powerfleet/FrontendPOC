import React from 'react';

class Counter extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

    }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {
    return (
      <div>
        <h1 class="page-title">Counter</h1>
        Current count: {this.state.count}
        <hr />
        <button onClick={() => this.handleCount(1)}>
            Click me
        </button>
      </div>
    );
  }
}

export default Counter;
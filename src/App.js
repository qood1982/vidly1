import React from 'react';
import Counter from './components/counter';
import Table from './components/table';
import axios from 'axios';
import Pagination from './components/pagination';

class App extends React.Component {
  state = {
    data: [],
    count: 0,
    pageSise: 5
  }

  async componentDidMount() {
    const promise = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    this.setState({ data: promise.data });
  }

  handelIncrement = () => {
    let count = this.state.count;
    count += 1;
    this.setState({ count });
  };
  render() {
    console.log(this.state.data.length);
    return <div className="App">

      <Counter count={this.state.count} onIncrement={this.handelIncrement} />
      <Table data={this.state.data} />
      <Pagination pageSize={this.state.pageSise} items={this.state.data} />

    </div>;
  }
}

export default App;

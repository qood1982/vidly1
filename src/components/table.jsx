import React from "react";

class Table extends React.Component {
  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((d) => (
                <tr key={d.id}>
                  <th scope="row">{d.userId}</th>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                  <td>{d.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
      
          
        </div>
      </div>
    );
  }
}

export default Table;

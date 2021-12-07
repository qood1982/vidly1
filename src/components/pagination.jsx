import React from "react";
import _ from "lodash";
class Pagination extends React.Component {
  handelPagination = () => {
    
  };
  render() {
    const { pageSize, items } = this.props;
    let pagesCount = items / pageSize;
    const page = _.range(1, pagesCount);
    console.log(pagesCount);
    return (
      <div>
        <nav aria-label="Page navigation">
          {page.map(p()=> <ul key={p} class="pagination">
                                <li class="page-item active">
                                    <a class="page-link" href="#">
                1
                                        </a>
                                            </li>
                                                 </ul>}
          
        </nav>
      </div>
    );
  }
}

export default Pagination;

import React, { Component } from 'react';

import 'styles/Pagination.css';

interface Props {
  limit: number;
  sendParamsFlights: Function;
}

interface State {
  actualPage: number;
}

class Pagination extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      actualPage: 1,
    }
  }
  calcLimitPage() {
    const { limit } = this.props;
    const pageNumber: number[] = [];

    for (let i = 1; i <= limit; i++) {
      pageNumber.push(i);
    }

    return pageNumber;
  }

  setActualPage = (pageNumber: number) => {
    const { sendParamsFlights } = this.props;

    this.setState({ actualPage: pageNumber });

    sendParamsFlights(pageNumber);
  }
  
  render() {
    const pageNumber = this.calcLimitPage();
    const { actualPage } = this.state;

    return (
      <div className="pagination">
          {pageNumber.map(number => (
            <div key={number} className="page-item" onClick={() => this.setActualPage(number)}>
              { number === actualPage ? (
                <p className="item current">
                  {number}
                </p>
              ) : (
                <p className="item">
                  {number}
                </p>
              )}
            </div>
          ))}
      </div>
    );
  }
}

export default Pagination;
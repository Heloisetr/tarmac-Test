import React, { PureComponent } from 'react';

import loader from 'assets/loader.gif';
import 'styles/Loader.css';

interface Props {
  color?: string;
}

class Loader extends PureComponent<Props> {
  static defaultProps = {
    color: 'black',
  };

  render() {
    return (
      <div className="loader">
        <img src={loader} alt="loader" />
      </div>
    );
  }
}

export default Loader;

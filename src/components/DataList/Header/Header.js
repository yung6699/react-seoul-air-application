import React, {Component} from 'react';
import './Header.css';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {handleChange, handleReload, keyword} = this.props;

    return (
      <div className="header">
        <div>
          <input
            value={keyword}
            placeholder="검색할 구역은?"
            onChange={handleChange}
            name="keyword"/>
        </div>
        <div>
          <button onClick={handleReload}>새로고침</button>
        </div>

      </div>

    );
  }
}

export default Header;

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleReload: PropTypes.func.isRequired,
  keyword: PropTypes.string
};

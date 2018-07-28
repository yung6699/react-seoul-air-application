import React, { Component } from 'react';
import ListItem from 'components/DataList/ListItem';
import Header from 'components/DataList/Header';
import './List.css';
import PropTypes from 'prop-types';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    const { items, handleReload, handleChange, handleSelect, keyword } = this.props; 
    return ( 
      <div>
        <Header 
          handleChange={handleChange}
          handleReload={handleReload}
          keyword={keyword}
        />
        <ul className="list">
          {items.map((item, index) => {
            return <ListItem data={item} handleSelect={handleSelect} key={index} index={index} />;
          })}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  handleReload: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  keyword: PropTypes.string
};

 
export default List;
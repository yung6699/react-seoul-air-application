import React, { Component } from 'react';
import ListItem from 'components/DataList/ListItem'
import Header from 'components/DataList/Header'
import './List.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleOnclick = (e) => {

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
            return <ListItem data={item}
            handleSelect={handleSelect} 
            key={index} index={index} />
          })}
        </ul>
      </div>
    );
  }
}
 
export default List;
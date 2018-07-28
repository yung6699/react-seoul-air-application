import React from 'react';
import './ListItem.css';
import PropTypes from 'prop-types';

const imgCount = (value) => {
  if (value >= 0 && value < 51) {
    return 'smile';
  } else if (value >= 50 && value < 101) {
    return 'frown';
  } else if (value >= 100 && value < 251) {
    return 'angry';
  } else if (value > 250) {
    return 'painful';
  } else {
    return 'calm';
  }
};

const ListItem = ({data, handleSelect, index}) => {
  const imgUrl = require('static/images/' + imgCount(data.IDEX_MVL) + '.svg');
  return (
    <li idx={index} name={data.MSRSTE_NM} onClick={handleSelect} className="item">
      <div className="section1">
        <div className="name">
          {data.MSRSTE_NM}
        </div>
        <div className="state-img">
          <img src={imgUrl} alt=""/>
        </div>
      </div>
      <div className="section2">
        <div>상태 : {data.IDEX_NM}</div>
        <div>대기환경지수 : {data.IDEX_MVL}</div>
        <div>미세먼지 : {data.PM10}㎍/㎥
        </div>
        <div>초미세먼지 : {data.PM25}㎍/㎥</div>
        <div>오존 : {data.O3}</div>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired
};

export default ListItem;

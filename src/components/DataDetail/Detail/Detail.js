import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from './Detail.css';
import DataTable from 'components/DataDetail/DataTable';
import loaction from 'static/images/location.svg';
import moment from 'moment';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected } = this.props;
        
    moment.lang('ko', {
      weekdays: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
      weekdaysShort: ['일','월','화','수','목','금','토'],
    });

    const imgUrl = require('static/images/' + selected.status + '.svg');
    const data  = selected.data;
        
    return (
      <div className={cx('detail-section')}>

        <div className={cx('section01')}>
          <div className={cx('current-location')}>
            <span><img src={loaction} alt="위치"/></span>{ data.MSRSTE_NM }
          </div>
          <div className={cx('current-date')}>
            {moment().format('YYYY년 MM월 DD일(ddd) 기준')}
          </div>
        </div>

        <div className={cx('section02')}>
          <img src={imgUrl} alt="대기상태"/>
        </div>

        <div className={cx('section03')}>
          <div className={cx('air-state')}>{data.IDEX_NM}</div>
          <div className={cx('air-value')}>{data.IDEX_MVL}</div>
        </div>

        <DataTable data={data}/>
      </div>
    );
  }
}


Detail.propTypes = {
  selected: PropTypes.object.isRequired
};



export default Detail;

import React, {Component} from 'react';
import classNames from 'classnames/bind'
import styles from './Detail.css';
import DataTable from 'components/DataDetail/DataTable';
import loaction from 'static/images/location.svg'
import moment from 'moment';

const cx = classNames.bind(styles);

const imgCount = (value=30) => {
    if (value >= 0 && value < 51) {
        return "smile"
    } else if (value >= 50 && value < 101) {
        return "frown"
    } else if (value >= 100 && value < 251) {
        return "angry"
    } else if(value > 250){
        return "painful"
    } else {
        return "calm"
    }
}


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    

    render() {
        const { selected } = this.props;
        
        moment.lang('ko', {
            weekdays: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
            weekdaysShort: ["일","월","화","수","목","금","토"],
        });
        
        const imgUrl = require('static/images/' + imgCount(selected.IDEX_MVL) + '.svg')
        return (
            <div className={cx('detail-section')}>

                <div className={cx('section01')}>
                    <div className={cx('current-location')}>
                        <span><img src={loaction} alt="위치"/></span>{ selected.MSRSTE_NM }
                    </div>
                    <div className={cx('current-date')}>
                        {moment().format('YYYY년 MM월 DD일(ddd) 기준')}
                    </div>
                </div>

                <div className={cx('section02')}>
                    <img src={imgUrl} alt="대기상태"/>
                </div>

                <div className={cx('section03')}>
                    <div className={cx('air-state')}>{selected.IDEX_NM}</div>
                    <div className={cx('air-value')}>{selected.IDEX_MVL}</div>
                </div>

                <DataTable selected={selected}/>
            </div>
        );
    }
}



export default Detail;

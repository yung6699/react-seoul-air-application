import React from 'react';
import styles from './Loading.css';
import classNames from 'classnames/bind';
import seoulmap from 'static/images/seoulmap.jpg';
const cx = classNames.bind(styles);

const Loading = () => {
  return ( 
    <div className={cx('loading-wrap')}>
      <div className={cx('text')}>서울시 대기정보 <br/>웹 애플리케이션</div>
      <div><img src={seoulmap} alt="탐색기 이미지"/></div>
      <p>
                  제작 : 윤태영 <br/>
                 사용기술 : React, Redux <br/>
        <span>Github : https://github.com/yung6699/react-seoul-air-application</span>
      </p>
    </div>
  );
};
 
export default Loading;
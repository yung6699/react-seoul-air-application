import React from 'react';
import styles from './DataTable.css';
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);


const DataTable = ({data}) => {
    return (          
      <div className={cx('section04')}>
        <table>
          <tbody>
            <tr>
              <td>미세먼지</td>
              <td>{data.PM10}㎍/㎥</td>
            </tr>
          </tbody>
            
          <tbody>
            <tr>
              <td>초미세먼지</td>
              <td>{data.PM25}㎍/㎥</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>오존</td>
              <td>{data.O3}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}
 
export default DataTable;
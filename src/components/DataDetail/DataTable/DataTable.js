import React from 'react';
import styles from './DataTable.css';
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);


const DataTable = ({selected}) => {
    return (          
      <div className={cx('section04')}>
        <table>
          <tbody>
            <tr>
              <td>미세먼지</td>
              <td>{selected.PM10}㎍/㎥</td>
            </tr>
          </tbody>
            
          <tbody>
            <tr>
              <td>초미세먼지</td>
              <td>{selected.PM25}㎍/㎥</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>오존</td>
              <td>{selected.O3}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}
 
export default DataTable;
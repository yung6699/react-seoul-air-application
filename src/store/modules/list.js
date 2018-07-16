import {createAction, handleActions} from 'redux-actions'
import { pender } from 'redux-pender'
import axios from 'axios';
import API_KEY from 'static/api/api.json'

function getItemsAPI(){
    return axios.get("http://openapi.seoul.go.kr:8088/"+API_KEY.key+"/json/RealtimeCityAir/1/25")
}


// 액션 타입을 정의해준다.
const GETITEMS = 'list/GETDATA'
const CHANGE = 'list/CHANGE'


// 액션 생성 함수를 만듭니다. 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
export const getItems = createAction(GETITEMS, getItemsAPI);
export const change = createAction(CHANGE, data => data)

// export const remove = createAction(REMOVE, id => id)
// export const update = createAction(UPDATE, obj => obj)
// export const change = createAction(CHANGE, target => target)

// 모듈의 초기 상태를 정의합니다.
const initialState = {
    keyword: '',
    items : []
}

// 리듀서를 만들어서 내보내줍니다. / handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고 두번째
// 파라미터는 초기 상태입니다.
export default handleActions({
  
    ...pender({
        type: GETITEMS,
        onSuccess: (state, { payload }) => {
         const { data } = payload;
         return {
            items : data.RealtimeCityAir.row
         }
        }
      }),

    [CHANGE]: (state, {payload}) => {
        return {
            ...state,
            [payload[0]]: payload[1]
        }
    }


}, initialState)
